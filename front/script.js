const languageSelector = document.querySelector('.language-selector')
const selected = document.querySelector('.selected-language')
const languageOptions = document.querySelector('.language-options')
const language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'pt'


window.document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('name_user')) {
      window.location.href = './feed/index.html'
   }

   if(language == 'pt'){
      selected.innerHTML = `<img src="./assets/images/br-flag.png" alt="Português" class="flag"><span>Português</span>`
   }else if(language == 'en'){
      selected.innerHTML = `<img src="./assets/images/usa-flag.png" alt="English" class="flag"><span>English</span>`
   }else{
      selected.innerHTML = `<img src="./assets/images/spain-flag.png" alt="Español" class="flag"><span>Español</span>`
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
   discover_section.innerText += `${languages[language].discover_title}`
   discover_text.innerText += `${languages[language].discover_text}`
   mission_title.innerText += `${languages[language].mission_title}`
   mission_text.innerText += `${languages[language].mission_text}`
   vision_title.innerText += `${languages[language].vision_title}`
   vision_text.innerText += `${languages[language].vision_text}`
   values_title.innerText += `${languages[language].values_title}`
   values_text1.innerText += `${languages[language].values_text1}`
   values_text2.innerText += `${languages[language].values_text2}`
   values_text3.innerText += `${languages[language].values_text3}`
   who_is.innerText += `${languages[language].who_is}`
   who_is_text.innerHTML += `${languages[language].who_is_text}`
   graph_title.innerText += `${languages[language].graph_title}`
   graph1.innerText += `${languages[language].graph1_label}`
   graph2.innerText += `${languages[language].graph2_label}`
   footer.innerHTML += `${languages[language].footer}`
   footer_link1.innerText += `${languages[language].header_item1}`
   footer_link2.innerText += `${languages[language].header_item2}`
   footer_link3.innerText += `${languages[language].banner_button}`
}