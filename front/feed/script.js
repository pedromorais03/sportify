const profileText = document.querySelector('#profile_text')
const nameUser = localStorage.getItem('name_user')

window.document.addEventListener('DOMContentLoaded', () => {
   profileText.innerHTML = `${localStorage.getItem('name_user')}`
   // console.log(nameUser)
})

