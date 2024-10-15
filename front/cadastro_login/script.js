const show_form = (show, hide) => {
   let formShow = document.querySelector(`.form-${show}`)
   let formHide = document.querySelector(`.form-${hide}`)

   formShow.style.display = 'flex'
   formShow.style.visibility = 'visible'
   formHide.style.display = 'none'
   formHide.style.visibility = 'hidden'   
}