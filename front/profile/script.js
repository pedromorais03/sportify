const profileText = document.querySelector('#profile_text')
const nameUser = localStorage.getItem('name_user')

if(nameUser) {
   profileText.innerHTML = `${localStorage.getItem('name_user')}`
}