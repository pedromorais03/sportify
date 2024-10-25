const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')

const toast = document.querySelector('.toast')
const toastText = document.querySelector('.toast-text')
const toastTimer = document.querySelector('.toast-timer')

const postModal = document.querySelector('#modal-post')

window.document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('name_user')){
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

const show_post_modal = () => {
   postModal.style.display = 'flex'
}

const close_post_modal = () => {
   postModal.style.display = 'none'
}


const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}