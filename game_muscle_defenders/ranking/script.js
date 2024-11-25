// const containerTitle = document.querySelector('.container-title')
const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const rankingTable = document.querySelector('.ranking-table')
const nameUser = localStorage.getItem('name_user')

window.document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('name_user')){
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   }else{
      window.location.href = '../index.html'
   }

   let row = 1
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/rankings', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         console.log(res)
         res.forEach(game => {
            let image = ''

            if(row == 1){
               image = `<img src='../../front/assets/images/gold_medal.png' />`
            }else if(row == 2){
               image = `<img src='../../front/assets/images/silver_medal.png' />`
            }else if(row == 3){
               image = `<img src='../../front/assets/images/bronze_medal.png' />`
            }

            let date = new Date(game.dt_run)
            let fomatted_date = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
            // getDate(): Obtém o dia do mês (1–31).
            // getMonth(): Obtém o índice do mês (0–11). Por isso, adicionamos 1 para ter o mês correto.
            // getFullYear(): Obtém o ano completo (ex.: 2024).
            // padStart(2, '0'): Garante que o dia e o mês tenham dois dígitos, adicionando um 0 à esquerda, se necessário.
            
            rankingTable.innerHTML += `
                                       <tr>
                                          <td>
                                             ${image}
                                             ${game.name_user}
                                          </td>
                                          <td>${game.score}</td>
                                          <td>${fomatted_date.replaceAll('-', '/')}</td>
                                       </tr>
                                      `
            row++
         });
      } else {
         console.error("Falha ao buscar ranqueamento")
      }
   }

   xhr.send()
})

profile.addEventListener('click', () => {
   if(getComputedStyle(profileOption).display == 'none'){
      profileOption.style.display = 'block'
   }else{
      profileOption.style.display = 'none'
   }
   
})

const logout = () => {
   localStorage.clear()
   window.location.href = '../../front/index.html'
}