const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')

window.document.addEventListener('DOMContentLoaded', () => {
   profileText.innerHTML = `${localStorage.getItem('name_user')}`
   // console.log(nameUser)
})

profile.addEventListener('click', () => {
   if(getComputedStyle(profileOption).display == 'none'){
      profileOption.style.display = 'block'
   }else{
      profileOption.style.display = 'none'
   }
   
})

const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}

