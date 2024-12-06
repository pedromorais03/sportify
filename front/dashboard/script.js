const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const slides = document.querySelector('.slider-slides')
const changeButton = document.getElementById('toggleButton')

let currentSection = 0

window.document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   }else{
      window.location.href = '../index.html'
   }
})

profile.addEventListener('click', () => {
   if(getComputedStyle(profileOption).display == 'none'){
      profileOption.style.display = 'block'
   }else{
      profileOption.style.display = 'none'
   }
   
})

changeButton.addEventListener('click', () => {
   currentSection = (currentSection + 1) % 2
   slides.style.transform = `translateX(-${currentSection * 100}%)`
})

const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}
