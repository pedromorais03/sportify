const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')

window.document.addEventListener('DOMContentLoaded', () => {   
   if(localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
      let date = new Date(localStorage.getItem('created_at'))
      let fomatted_date = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`
      
      ipt_name.value = localStorage.getItem('name_user')
      ipt_created_at.value = fomatted_date
      ipt_email.value = localStorage.getItem('email')
      ipt_username.value = localStorage.getItem('username')
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

const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}
