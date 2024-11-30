const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const buttonGenerate = document.querySelector('.generate-playlist')
const nameUser = localStorage.getItem('name_user')

const columns = document.querySelectorAll('.column')

window.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   } else {
      window.location.href = '../index.html'
   }
})

document.addEventListener('dragstart', (e) => {
   e.target.classList.add("dragging")
})

document.addEventListener('dragend', (e) => {
   e.target.classList.remove("dragging")
})

columns.forEach((column) => {
   column.addEventListener('dragover', (e) => {
      const dragging = document.querySelector(".dragging")
      const applyAfter = getNewPosition(column, e.clientY)

      if(applyAfter){
         applyAfter.insertAdjcentElement("afterend", dragging)
      }else{
         column.prepend(dragging)
      }
   })
})

const getNewPosition = (column, posY) => {
   const cards = column.querySelectorAll(".genre:not(.dragging)")
   let result

   for(let card of cards){
      const box = card.getBoundingClientRect()
      const boxCenterY = box.y + box.height / 2

      if(posY >= boxCenterY){
         result = card
      }
   }

   return result
}

buttonGenerate.addEventListener("click", () => {
   let selectedGenres = document.querySelectorAll('.selected-genres .genre')
   let genres = []

   selectedGenres.forEach(genre => {
      genres.push(genre.getAttribute("data-genre"))
   })

})