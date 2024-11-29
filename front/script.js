const languageSelector = document.querySelector('.language-selector')
const selected = document.querySelector('.selected-language')
const languageOptions = document.querySelector('.language-options')

window.document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('name_user')) {
      window.location.href = './feed/index.html'
   }

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