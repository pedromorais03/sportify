const profileText = document.querySelector('#profile_text')

window.document.addEventListener('DOMContentLoaded', () => {
   if(nameUser) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   }
})

