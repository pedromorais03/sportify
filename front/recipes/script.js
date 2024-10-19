const containerMain = document.querySelector('.container-main')


window.document.addEventListener('DOMContentLoaded', () => {
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
                                                <p>${data.prep_methods}</p>
                                             </div>
                                          </div>
                                       </div>`
         })
      }
   }

   xhr.send()
})




