const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'pt'

const divRecipes = document.querySelector('.profile-recipes')
const divPosts = document.querySelector('.profile-posts')

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

   load_recipes()
   load_posts()
   set_texts()
})

profile.addEventListener('click', () => {
   if(getComputedStyle(profileOption).display == 'none'){
      profileOption.style.display = 'block'
   }else{
      profileOption.style.display = 'none'
   }
   
})

const load_recipes = () => {
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/recipes/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)

         if(res.length == 0){
            divRecipes.innerHTML += `
                                    <div class="recipes">
                                       <h3 class="recipe-title error">Que pena, parece que você ainda não possuí nenhuma receita...</h3>
                                    </div>
                                   `
         }

         res.forEach(data => {
            divRecipes.innerHTML +=`
                                    <div class="recipes">
                                       <h1 class="recipe-title">${data.name_recipe}</h1>
                                       <div class="recipe-content">
                                          <span class="span_description"> <b>Descrição:</b> ${data.description}</span>
                                          <span class="span_ingredients"> <b>Ingredientes:</b> ${data.ingredients_recipes}</span>
                                          <span class="span_method" ><b>Método de preparo:</b> ${data.prep_method}</span>
                                       </div>
                                    </div>
                                   `
         });
         
      } else {
         
      }
   }

   xhr.send()
}

const load_posts = () => {
   console.log("receitas")
   const xhr = new XMLHttpRequest
   xhr.open('GET', `http://localhost:3000/posts/${localStorage.getItem('user_id')}`, true)
   xhr.setRequestHeader('Content-Type', 'application/json')

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)

         if(res.length == 0){
            divPosts.innerHTML += `
                                    <div class="post">
                                       <h3 class="recipe-title error">Que pena, parece que você ainda não possuí nenhum post...</h3>
                                    </div
                                 `
         }

         res.forEach(data => {
            divPosts.innerHTML +=`
                                    <div class="post">
                                       <h1 class="post-title">${data.title}</h1>
                                       <div class="post-content">
                                          <span>${data.description}</span>
                                       </div>
                                    </div>
                                   `
         });
         
      } else {
         
      }
   }

   xhr.send()
}

const logout = () => {
   localStorage.clear()
   window.location.href = '../index.html'
}

const set_texts = () => {
   aside_item1.innerHTML += `${languages[language].aside_item1}`
   aside_item2.innerHTML += `${languages[language].aside_item2}`
   aside_item3.innerHTML += `${languages[language].aside_item3}`
   aside_item4.innerHTML += `${languages[language].aside_item4}`
   aside_item5.innerHTML += `${languages[language].aside_item5}`
   aside_item6.innerHTML += `${languages[language].aside_item6}`
   posts_title.innerText += `${languages[language].profile_recipes}`
   recipes_title.innerText += `${languages[language].profile_posts}`
}