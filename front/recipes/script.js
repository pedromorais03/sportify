const divTeste = document.querySelector('.teste')


window.document.addEventListener('DOMContentLoaded', () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/recipes', true)

   xhr.onload = () => {
      if(xhr.status === 200){
         const res = JSON.parse(xhr.responseText)
         res.forEach(recipe => {
            divTeste.innerHTML += `Titulo: ${recipe.name_recipe} <br>
                                 Ingredientes ${recipe.ingredients_recipes} <br>
                                 Descrição: ${recipe.decription} <br>
                                 Modo de preparo: ${recipe.prep_method} <br>
                                 Usuario: ${recipe.fk_user} <br>`
         })
      }
   }

   xhr.send()
})




