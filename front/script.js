const languageSelector = document.querySelector('.language-selector')
const selected = document.querySelector('.selected-language')
const languageOptions = document.querySelector('.language-options')
const language = localStorage.getItem('lang')

window.document.addEventListener('DOMContentLoaded', () => {
   console.log(languages[language].banner)
   if (localStorage.getItem('name_user')) {
      window.location.href = './feed/index.html'
   }

   if(localStorage.getItem('lang') == 'pt'){
      selected.innerHTML = `<img src="./assets/images/br-flag.png" alt="Português" class="flag"><span>Português</span>`
   }else{
      selected.innerHTML = `<img src="./assets/images/usa-flag.png" alt="Inglês" class="flag"><span>Inglês</span>`
   }

   set_texts()

})

selected.addEventListener('click', () => {
   languageOptions.classList.toggle('show')
})

languageOptions.addEventListener('click', (e) => {
   const selectedLanguage = e.target.closest('li')
   if (selectedLanguage) {
      const langCode = selectedLanguage.dataset.lang
      const flag = selectedLanguage.querySelector('.flag').src
      const language = selectedLanguage.textContent.trim()

      selected.innerHTML = `<img src="${flag}" alt="${language}" class="flag"><span>${language}</span>`
      languageOptions.classList.remove('show')
      localStorage.setItem("lang", langCode)
      window.location.reload()
   }
})

document.addEventListener('click', (e) => {
   if (!languageSelector.contains(e.target)) {
      languageOptions.classList.remove('show');
   }
});

const redirect_to = (page) => {
   if (page) {
      window.location.href = `./${page}/index.html`
   } else {
      window.location.href = './index.html'
   }
}

const set_texts = () => {
   banner_text.innerHTML += `<strong> ${languages[language].banner} </strong>`
   register_button.innerText += `${languages[language].banner_button}`
   header_item1.innerText += `${languages[language].header_item1}`
   header_item2.innerText += `${languages[language].header_item2}`
}