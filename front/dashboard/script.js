const profileText = document.querySelector('#profile_text')

window.document.addEventListener('DOMContentLoaded', () => {
   profileText.innerHTML = `${localStorage.getItem('name_user')}`
})
