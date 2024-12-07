const ctx = document.getElementById('interaction-graph')
const ctx2 = document.getElementById('frequency-graph')
const ctx3 = document.getElementById('score-graph')
const ctx4 = document.getElementById('rank-graph')

let typeArray = []
let amountArray = []

window.addEventListener('DOMContentLoaded', () => {
   generate_interactions_graph() 
   get_kpi()
   generate_frequency_graph()
   get_game_kpi()
   generate_score_graph()
   generate_rank_graph()
})

const generate_interactions_graph = () => {
   let totalInteractions = 0
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/interactions/${localStorage.getItem('user_id')}`, true)
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

const get_kpi = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/kpi/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         span_last_interaction.innerText = res[0].last_interaction
      }
   }
   xhr.send()  
}

const generate_frequency_graph = () => {
   let dateArray = []
   let amountArray = []
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/frequency/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
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

const get_game_kpi = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/game-kpi/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         span_total_score.innerHTML = res[0].total_score
         span_max_score.innerHTML = res[0].max_score
         span_tries.innerHTML = res[0].tries
         span_last_run.innerHTML = res[0].last_run
         span_avg_score.innerHTML = res[0].avg_score
      }
   }
   xhr.send()  
}

const generate_score_graph = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/score/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         let arrayLength = []
         let scoreArray = []
         const res = JSON.parse(xhr.responseText)
         console.log("score", res)

         res.forEach((data, index) => {
            arrayLength.push(index+1)
            scoreArray.push(data.score)
         })

         const lineGraph = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: arrayLength,
                datasets: [{
                    label: 'Pontuações',
                    data: scoreArray,
                    backgroundColor: ['#CB2D6F'],
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

const generate_rank_graph = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/dashboard/rank`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      let playerArray = []
      let scoreArray = []
      let triesArray = []
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)   
         console.log("rank", res)     
         
         res.forEach((data) => {
            playerArray.push(data.full_name)
            scoreArray.push(data.max_score_by_player) 
            triesArray.push(data.total_tries)
         })
      }

     

      const barGraph = new Chart(ctx4, {
         type: 'bar',
         data: {
             labels: playerArray,
             datasets: [{
                 label: 'Pontuação Máxima',
                 data: scoreArray,
                 backgroundColor: ['#CB2D6F'],
                 barThickness: 30,
                 borderWidth: 2
             },
             {
               label: 'Total de Tentativas',
               data: triesArray,
               backgroundColor: ['#13A098'],
               barThickness: 30,
               borderWidth: 2
           }]
         }
      })
   }
   xhr.send()  
}