const show_form = (show, hide) => {
   let formShow = document.querySelector(`.form-${show}`)
   let formHide = document.querySelector(`.form-${hide}`)

   formShow.style.display = 'flex'
   formShow.style.visibility = 'visible'
   formHide.style.display = 'none'
   formHide.style.visibility = 'hidden'   
}

const verify_password = () => {
   let password = document.getElementById('c-password')
   let confPassword = document.getElementById('conf-password')

   if(!(password.value == confPassword.value)) {
      password.style.border = '1px solid var(--error)'
      password.style.color = 'var(--error)'

      confPassword.style.border = '1px solid var(--error)'
      confPassword.style.color = 'var(--error)'
   }else{
      password.style.border = 'none'
      password.style.color = 'var(--dark-gray)'

      confPassword.style.border = 'none'
      confPassword.style.color = 'var(--dark-gray)'
   }
}