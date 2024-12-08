const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const buttonGenerate = document.querySelector('.generate-playlist')
const nameUser = localStorage.getItem('name_user')
const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'pt'

const columns = document.querySelectorAll('.column')

window.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   } else {
      window.location.href = '../index.html'
   }

   set_texts()
})

profile.addEventListener('click', () => {
   if(getComputedStyle(profileOption).display == 'none'){
      profileOption.style.display = 'block'
   }else{
      profileOption.style.display = 'none'
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
         applyAfter.insertAdjacentElement("afterend", dragging)
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

   const xhr = new XMLHttpRequest
   xhr.open('POST', 'http://localhost:3000/songs', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         let playlist = res.clearedPlaylist

         console.log(playlist)
      }
   }

   const data = JSON.stringify({
      genres
   })

   xhr.send(data)

})

const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}


const set_texts = () => {
   aside_item1.innerHTML += `${languages[language].aside_item1}`
   aside_item2.innerHTML += `${languages[language].aside_item2}`
   aside_item3.innerHTML += `${languages[language].aside_item3}`
   aside_item4.innerHTML += `${languages[language].aside_item4}`
   aside_item5.innerHTML += `${languages[language].aside_item5}`
   aside_item6.innerHTML += `${languages[language].aside_item6}`
   select_songs.innerHTML += `${languages[language].select_songs}`
   selected_songs.innerText += `${languages[language].selected_songs}`
   generated_songs.innerHTML += `${languages[language].generated_songs}`
   genre_1.innerText += `${languages[language].genre_1}`
   genre_2.innerText += `${languages[language].genre_2}`
   genre_3.innerText += `${languages[language].genre_3}`
   genre_4.innerText += `${languages[language].genre_4}`
   genre_5.innerText += `${languages[language].genre_5}`
   genre_6.innerText += `${languages[language].genre_6}`
   genre_7.innerText += `${languages[language].genre_7}`
   generate_playlist.innerText += `${languages[language].generate_playlist}`
}