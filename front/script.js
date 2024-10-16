const redirect_to = (page) =>{
   if(page){
      window.location.href = `./${page}/index.html`
   }else{
      window.location.href = './index.html'
   }
}