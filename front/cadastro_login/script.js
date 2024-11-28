const formCadastro = document.querySelector('.form-cadastro')
const formLogin = document.querySelector('.form-login')
const spanErroCadastro = document.getElementById('error-cadastro')
const spanErroLogin = document.getElementById('error-login')
const toast = document.querySelector('.toast')
const toastText = document.querySelector('.toast-text')
const toastTimer = document.querySelector('.toast-timer')

const iconLoginPassword = document.querySelector('#icon_l_password')
const inputLoginPassword = document.querySelector('#ipt_l_password')
const currentIcon = inputLoginPassword.getAttribute('data-lucide')

let passwordLength = false
let passwordUpper = false
let passwordLower = false
let passwordSpecial = false
let passwordNumber = false

formLogin.addEventListener('submit', (e) => {
   const username = ipt_l_username.value
   const password = ipt_l_password.value

   e.preventDefault()
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/login/${username}/${password}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if(xhr.status === 200){
         const res = JSON.parse(xhr.responseText)
         let name = `${res.name_user} ${res.second_name_user}`
         localStorage.setItem('email', res.email_user)
         localStorage.setItem('created_at', res.created_at)
         localStorage.setItem('username', username)
         localStorage.setItem('user_id', res.id_user)
         localStorage.setItem('name_user', name)
         window.location.href = '../feed/index.html'
         
      }else{
         localStorage.clear()
         spanErroLogin.style.display = 'block' 
         spanErroLogin.style.visibility = 'visible' 
         spanErroLogin.style.color = 'var(--error)' 
         ipt_l_password.style.border = '1px solid var(--error)'
         ipt_l_username.style.border = '1px solid var(--error)'
      }
   }

   xhr.send()
})

formCadastro.addEventListener('submit', (e) => {
   e.preventDefault()
   console.log('entrou aq')

   if(passwordLength && passwordLower && passwordSpecial && passwordNumber && passwordUpper){
      toggle_error_cadastro('none', 'hidden', '')

      if(ipt_second_name.value == '' || ipt_second_name.value == undefined || ipt_name.value == '' || ipt_name.value == undefined || ipt_email.value == '' || ipt_email.value == undefined || ipt_username.value == '' || ipt_username.value == undefined){
         toggle_error_cadastro('block', 'visible', 'Todos os campos devem estar devidamente preenchidos ')
      }else{
         toggle_error_cadastro('none', 'hidden', '')
         insert_user()
         show_form('login', 'cadastro')
      }
      
      
   }else{
      toggle_error_cadastro('block', 'visible', 'A senha deve atender aos requisitos mínimos<br>')
   }
})

const toggle_password_icon = () => {
   inputLoginPassword.type = inputLoginPassword.type == 'text' ? 'password' : 'text'

   iconLoginPassword.dataset.lucide = iconLoginPassword.dataset.lucide === 'eye-off' ? 'eye' : 'eye-off'
   lucide.createIcons()
}

const toggle_error_cadastro = (display, visibility, msg) => {
   spanErroCadastro.style.display = display
   spanErroCadastro.style.visibility = visibility
   spanErroCadastro.innerHTML = msg
}

const show_form = (show, hide) => {
   let formShow = document.querySelector(`.form-${show}`)
   let formHide = document.querySelector(`.form-${hide}`)

   formShow.style.display = 'flex'
   formShow.style.visibility = 'visible'
   formHide.style.display = 'none'
   formHide.style.visibility = 'hidden'   
}

const verify_password = () => {
   let password = document.getElementById('ipt_c_password')
   let confPassword = document.getElementById('ipt_conf_password')

   if(!(password.value == confPassword.value)) {
      password.style.border = '1px solid var(--error)'
      password.style.color = 'var(--error)'

      confPassword.style.border = '1px solid var(--error)'
      confPassword.style.color = 'var(--error)'

      // toggle_error_cadastro('block', 'visible', 'As senhas devem ser iguais')
   }else{
      password.style.border = 'none'
      password.style.color = 'var(--dark-gray)'

      confPassword.style.border = 'none'
      confPassword.style.color = 'var(--dark-gray)'

      // toggle_error_cadastro('none', 'hidden', '')
   }
}

const verify_requirements = () => {
   let password = document.getElementById('ipt_c_password')

   if(password.value.match(/[0-9]/)){
      span_number.style.color = `var(--light-primary-color)`
      passwordNumber = true
   }else{
      span_number.style.color = `var(--error)`
      passwordNumber = false
   }

   if(password.value.match(/[a-z]/)){
      span_lower.style.color = `var(--light-primary-color)`
      passwordLower = true
   }else{
      span_lower.style.color = `var(--error)`
      passwordLower = false
   }

   if(password.value.match(/[A-Z]/)){
      span_upper.style.color = `var(--light-primary-color)`
      passwordUpper = true
   }else{
      span_upper.style.color = `var(--error)`
      passwordUpper = false
   }

   if(password.value.length >= 8){
      span_length.style.color = `var(--light-primary-color)`
      passwordLength = true
   }else{
      span_length.style.color = `var(--error)`
      passwordLength = false
   }

   if(password.value.match(/[@#$&!_]/)){
      span_special.style.color = `var(--light-primary-color)`
      passwordSpecial = true
   }else{
      span_special.style.color = `var(--error)`
      passwordSpecial = false
   }
}

const insert_user = () => {
   const name = ipt_name.value
   const second_name = ipt_second_name.value
   const email = ipt_email.value
   const username = ipt_username.value
   const password = ipt_c_password.value

   const xhr = new XMLHttpRequest
   xhr.open('POST', 'http://localhost:3000/user', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if(xhr.status === 200){
         const res = JSON.parse(xhr.responseText)
         console.log(`Response: ${res}`)
         show_toast('Usuário cadastrado com sucesso', 'success')
      }else{
         show_toast('Erro ao cadastrar usuário', 'error')
      }
   }

   const data = JSON.stringify({
      name_user: name,
      second_name_user: second_name,
      email_user: email,
      username: username,
      password: password
   })

   xhr.send(data)
}

const show_toast = (text, color) => {
   toast.classList.add('show')
   toastText.innerText = text
   toastTimer.style.backgroundColor = `var(--${color})`

   setTimeout(() => toast.classList.remove('show'), 3000)
}
