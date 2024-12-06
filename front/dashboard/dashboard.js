const ctx = document.getElementById('interaction-graph')
const ctx2 = document.getElementById('frequency-graph')

let typeArray = []
let amountArray = []

window.addEventListener('DOMContentLoaded', () => {
   generateInteractionsGraph() 
   getKpi()
   generateFrequencyGraph()
})

const generateInteractionsGraph = () => {
   let totalInteractions = 0
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/dashboard/interactions', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         res.forEach(interaction => {
            typeArray.push(interaction.type)
            amountArray.push(interaction.total_by_type)
            totalInteractions += interaction.total_by_type
         })

         let mostUsed = Math.max(...amountArray)
         let indexMostUsed = amountArray.indexOf(mostUsed)
         let mostUsedInteraction = typeArray[indexMostUsed]

         const pieGraph = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: typeArray,
                datasets: [{
                    label: 'Interações',
                    data: amountArray,
                    backgroundColor: ['#0F292F', '#501F3A', '#13A098', '#CB2D6F'],
                    barThickness: 30,
                    borderWidth: 2
                }]
            }
         })

         span_total_interaction.innerHTML = totalInteractions
         span_most_used_type.innerHTML = mostUsedInteraction
      }
   }
   xhr.send()  
}

const getKpi = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/dashboard/kpi', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         console.log(res)
         span_last_interaction.innerText = res[0].last_interaction
      }
   }
   xhr.send()  
}

const generateFrequencyGraph = () => {
   let dateArray = []
   let amountArray = []
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/dashboard/frequency', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         console.log(res)
         res.forEach(interaction => {
            let date = new Date(interaction.dt_interaction)
            let fomatted_date = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
            
            dateArray.push(fomatted_date)
            amountArray.push(interaction.total_by_day)
         })

         const lineGraph = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: dateArray,
                datasets: [{
                    label: 'Interações',
                    data: amountArray,
                    backgroundColor: ['#13A098'],
                    barThickness: 30,
                    borderWidth: 2
                }]
            },
            options:{
               scales:{
                  y:{
                     beginAtZero: true
                  }
               }
            }
         })
      }
   }
   xhr.send()  
}
