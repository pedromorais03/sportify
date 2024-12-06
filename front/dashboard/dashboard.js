const ctx = document.getElementById('interaction-graph')

let typeArray = []
let amountArray = []

window.addEventListener('DOMContentLoaded', () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/dashboard/interactions', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         res.forEach(interaction => {
            typeArray.push(interaction.type)
            amountArray.push(interaction.total_by_type)
         })

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
      }
   }
   xhr.send()   
})

const generateGraph = (labels, dados) => {
   
}
