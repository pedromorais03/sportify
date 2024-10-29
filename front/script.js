window.document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('name_user')){
      window.location.href = './feed/index.html'
   }

})

const redirect_to = (page) =>{
   if(page){
      window.location.href = `./${page}/index.html`
   }else{
      window.location.href = './index.html'
   }
}