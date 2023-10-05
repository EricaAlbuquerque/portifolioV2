const hamburguer = document.querySelector(".hamburguer");
const nav=document.querySelector(".nav-list");

hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle('active');
    nav.classList.toggle('active');
    
    
});