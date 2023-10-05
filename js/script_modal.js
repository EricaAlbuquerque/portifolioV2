
//teste de modal 3

const btn1 =document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const btn3 =document.getElementById("btn3");

const modal1 =document.getElementById("modal1");
const modal2 =document.getElementById("modal2");
const modal3 =document.getElementById("modal3");

const close1=document.getElementById("close");
const close2=document.getElementById("close2");
const close3=document.getElementById("close3");



btn1.onclick= function(){
    modal1.showModal();
}

close1.onclick= function(){
    modal1.close();
   
}
btn2.onclick=function(){
   modal2.showModal();
}
close2.onclick= function(){
    modal2.close();
}

btn3.onclick=function(){
    modal3.showModal();
 }
 close3.onclick= function(){
     modal3.close();
 }





close.addEventListener('click',() =>{
    modal1.classList.remove('show');
    });














