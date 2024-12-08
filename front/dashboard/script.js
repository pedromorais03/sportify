const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const slides = document.querySelector('.slider-slides')
const changeButton = document.getElementById('toggleButton')
const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'pt'

let currentSection = 0

window.document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   }else{
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

changeButton.addEventListener('click', () => {
   currentSection = (currentSection + 1) % 2
   slides.style.transform = `translateX(-${currentSection * 100}%)`
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
   toggleButton.innerText += `${languages[language].change_section}`
   dashboard_s1_kpi1.innerText += `${languages[language].dashboard_s1_kpi1}`
   dashboard_s1_kpi2.innerText += `${languages[language].dashboard_s1_kpi2}`
   dashboard_s1_kpi3.innerText += `${languages[language].dashboard_s1_kpi3}`
   dashboard_s2_kpi1.innerText += `${languages[language].dashboard_s2_kpi1}`
   dashboard_s2_kpi2.innerText += `${languages[language].dashboard_s2_kpi2}`
   dashboard_s2_kpi3.innerText += `${languages[language].dashboard_s2_kpi3}`
   dashboard_s2_kpi4.innerText += `${languages[language].dashboard_s2_kpi4}`
   dashboard_s2_kpi5.innerText += `${languages[language].dashboard_s2_kpi5}`
}
