const containerMain = document.querySelector('.container-main')
const book = document.querySelector('.book')
const hiddenBook = document.querySelector('.hidden-book')
const firstPage= document.querySelector('.first-page')
const previousButton = document.querySelector('#previous-recipe')
const nextButton = document.querySelector('#next-recipe')
const downloadButton = document.querySelector('#download-book')
const profileText = document.querySelector('#profile_text')
const profile = document.querySelector('.profile')
const profileOption = document.querySelector('.profile-option')
const nameUser = localStorage.getItem('name_user')
const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'pt'

const toast = document.querySelector('.toast')
const toastText = document.querySelector('.toast-text')
const toastTimer = document.querySelector('.toast-timer')

const recipeModal = document.querySelector('#modal-recipe')

let currentPage = 0
let pages
let pagesObject = []

window.document.addEventListener('DOMContentLoaded', () => {

   if(currentPage == 0) {
      previousButton.disabled = true
   }

   recipeModal.style.display = 'none'
   if (localStorage.getItem('name_user')) {
      profileText.innerHTML = `${localStorage.getItem('name_user')}`
   } else {
      window.location.href = '../index.html'
   }

   const xhr = new XMLHttpRequest
   xhr.open('GET', 'http://localhost:3000/recipes', true)

   xhr.onload = () => {
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         let counterPage = 1
         book.innerHTML += `
                              <div class='page first-page' id='page${counterPage}' style='z-index: ${res.length}'> 
                                 <h1> Livro de receitas Sportify </h1>
                                 <img src='../assets/images/sportify_logo.png' />
                                 <span> Uma colaboração da comunidade maromba ❤</span>
                              </div>
                              <div class='html2pdf__page-break'></div>
                           `
         res.forEach(data => {
            var zindex = res.length - counterPage
            counterPage++
            // console.log(data.description)
            book.innerHTML += `
                              <div class='page' id='page${counterPage}' style='z-index: ${zindex}'> 
                                 <div class="recipe">
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
                                          <span id="span_description">${data.description}</span>
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
                                 </div>
                                 <span class='current-page'> ${counterPage} </span>
                              </div>
                              `

            hiddenBook.innerHTML += `
                                    <div class='page'> 
                                       <div class="recipe">
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
                                                <span id="span_description">${data.description}</span>
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
                                       </div>
                                    </div>
                                    <div class='html2pdf__page-break'></div>
                                 `
            pagesObject.push({
               user: `${data.name_user} ${data.second_name_user}`,
               title: data.name_recipe,
               description: data.description,
               ingredients: data.ingredients_recipes,
               prep_method: data.prep_method
            })
         })

         pages = document.querySelectorAll('.page')
      }
   }

   xhr.send()

   set_texts()
})

profile.addEventListener('click', () => {
   if (getComputedStyle(profileOption).display == 'none') {
      profileOption.style.display = 'block'
   } else {
      profileOption.style.display = 'none'
   }

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
      if (xhr.status === 200) {
         const res = JSON.parse(xhr.responseText)
         console.log(`Response: ${res}`)
         ipt_title_recipe.value = ''
         ipt_desc_recipe.value = ''
         ipt_ingredients_recipe.value = ''
         ipt_prep_recipe.value = ''
         close_recipe_modal()
         show_toast('Receita inserida com sucesso', 'success')
      } else {
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

nextButton.addEventListener('click', () => {
   previousButton.disabled = false

   if(currentPage < pages.length - 1){
      pages[currentPage].style.transform = 'rotateY(-180deg)'
      currentPage++
   }

   if(currentPage == pages.length - 1){
      nextButton.disabled = true
   }
})

previousButton.addEventListener('click', () => {
   nextButton.disabled = false

   if(currentPage > 0){
      currentPage--
      pages[currentPage].style.transform = 'rotateY(0deg)'
   }

   if(currentPage === 0){
      previousButton.disabled = true
   }
})

downloadButton.addEventListener('click', () => {
   const opt = {
      margin:       1,
      filename:     'book.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
   }
   html2pdf().set(opt).from(hiddenBook).save()
})

const show_recipe_modal = () => {
   recipeModal.style.display = 'flex'
}

const close_recipe_modal = () => {
   recipeModal.style.display = 'none'
}

const show_toast = (text, color) => {
   toast.classList.add('show')
   toastText.innerText = text
   toastTimer.style.backgroundColor = `var(--${color})`

   setTimeout(() => toast.classList.remove('show'), 3000)
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
}