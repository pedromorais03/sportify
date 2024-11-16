const containerTitle = document.querySelector('.container-title')
const nameUser = localStorage.getItem('name_user')

window.addEventListener('DOMContentLoaded', () => {
   containerTitle.innerHTML = `${nameUser}`
})