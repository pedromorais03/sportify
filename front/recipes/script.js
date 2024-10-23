const containerMain = document.querySelector('.container-main')
const profileText = document.querySelector('#profile_text')
const nameUser = localStorage.getItem('name_user')
const toast = document.querySelector('.toast')
const toastText = document.querySelector('.toast-text')
const toastTimer = document.querySelector('.toast-timer')

const recipeModal = document.querySelector('#modal-recipe')

window.document.addEventListener('DOMContentLoaded', () => {
   recipeModal.style.display = 'none'
   profileText.innerHTML = `${localStorage.getItem('name_user')}`

   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/recipes', true)

   xhr.onload = () => {
      if(xhr.status === 200){
         const res = JSON.parse(xhr.responseText)
         res.forEach(data => {
            containerMain.innerHTML += `<div class="recipe">
                                          <div class="recipe-header">
                                             <div class="recipe-header-user">
                                                <span>Postado por:</span>
                                                <span class="user">${data.name_user} ${data.second_name_user}</span>
                                             </div>
                                             <span class="title">${data.name_recipe}</span>
                                          </div>
                                          <div class="recipe-text">
                                             <div class="recipe-desc">
                                                <span>Descrição</span>
                                                <p>${data.description}</p>
                                             </div>
                                             <div class="recipe-ingredients">
                                                <span>Ingredientes</span>
                                                <p>${data.ingredients_recipes}</p>
                                             </div>
                                             <div class="recipe-method">
                                                <span>Modo de preparo</span>
                                                <p>${data.prep_method}</p>
                                             </div>
                                          </div>
                                       </div>`
         })
      }
   }

   xhr.send()
})

const insert_recipe = () => {
   const title = ipt_title_recipe.value
   const description = ipt_desc_recipe.value
   const ingredients = ipt_ingredients_recipe.value
   const prep_method = ipt_prep_recipe.value
   const id = localStorage.getItem('user_id')

   const xhr = new XMLHttpRequest
   xhr.open('POST', 'http://localhost:3000/recipes', true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if(xhr.status === 200){
         const res = JSON.parse(xhr.responseText)
         console.log(`Response: ${res}`)
         ipt_title_recipe.value = ''
         ipt_desc_recipe.value = ''
         ipt_ingredients_recipe.value = ''
         ipt_prep_recipe.value = ''
         close_recipe_modal()
         show_toast('Receita inserida com sucesso', 'success')
      }else{
         show_toast('Erro ao inserir receita', 'error')
      }
   }

   const data = JSON.stringify({
      title: title,
      description: description,
      ingredients: ingredients,
      prep_method: prep_method,
      id_user: id
   })

   xhr.send(data)
}

const show_recipe_modal = () => {
   recipeModal.style.display = 'flex'
}

const close_recipe_modal = () => {
   recipeModal.style.display = 'none'
}

function show_toast(text, color){
   toast.classList.add('show')
   toastText.innerText = text
   toastTimer.style.backgroundColor = `var(--${color})`

   setTimeout(() => toast.classList.remove('show'), 3000)
}