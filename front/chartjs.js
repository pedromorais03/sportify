const ctx = document.getElementById('freq-graph').getContext('2d')
const ctx2 = document.getElementById('quantity-graph').getContext('2d')

// Grafico de Top 10 paises com mais % da populacao que mais frequentam academias
// ref: https://www.em.com.br/app/noticia/saude-e-bem-viver/2023/01/18/interna_bem_viver,1446196/brasileiros-estao-em-2-no-ranking-mundial-dos-que-mais-vao-a-academias.shtml
const barGraph = new Chart(ctx, {
  type: 'bar', // Tipo de gráfico (ex: 'line', 'bar', 'pie')
  data: {
      labels: ['Índia', 'Brasil', 'África do Sul', 'China', 'Austrália', 'Suécia', 'Finlândia', 'México', 'Espanha', 'Reino Unido'],
      datasets: [{
          label: '% da População na academia',
          data: [24, 21, 21, 20, 19, 19, 15, 14, 14, 14],
          backgroundColor: [
              '#CB2D6F'
          ],
         
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
})

const barGraph2 = new Chart(ctx2, {
   type: 'bar', // Tipo de gráfico (ex: 'line', 'bar', 'pie')
   data: {
       labels: ['Estados Unidos', 'Brasil', 'México', 'Alemanha', 'Argentina', 'Itália', 'Reino Unido', 'Coreia do Sul', 'Canadá', 'Japão'],
       datasets: [{
           label: 'Quantidade de academia',
           data: [41.190, 29.525, 12.871, 9.669, 7.910, 7.760, 7.239, 6.590, 6.587, 4.950],
           backgroundColor: [
               '#13A098'
           ],
          
       }]
   },
   options: {
       scales: {
           y: {
               beginAtZero: true
           }
       }
   }
 })