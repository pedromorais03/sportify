const ctx = document.getElementById('freq-graph')
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
         
      },{
         label: '% da População em situação de obesidade',
         data: [3.9, 22.1, 28.3, 6.2, 29, 20.6, 22.2, 28.9, 23.8, 27.8],
         backgroundColor: ['#13A098']
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

// Top 10 paises com mais academias
const barGraph2 = new Chart(ctx2, {
   type: 'bar', // Tipo de gráfico (ex: 'line', 'bar', 'pie')
   data: {
      labels: ['Estados Unidos', 'Brasil', 'México', 'Alemanha', 'Argentina', 'Itália', 'Reino Unido', 'Coreia do Sul', 'Canadá', 'Japão'],
      datasets: [{
         label: 'Quantidade de academia',
         data: [41190, 29525, 12871, 9669, 7910, 7760, 7239, 6590, 6587, 4950],
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
   },
})