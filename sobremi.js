const conteneLoadin= document.querySelector(".conteneLoadin");


window.setInterval(() => {
    conteneLoadin.style.opacity='0';
    conteneLoadin.style.visibility='hidden';
    conteneLoadin.style.zIndex='0';
    
}, 2000);











function responsiveMenu(){
    var x = document.getElementById( "nav");
   
    var titu=document.querySelectorAll(".titu");
   x.classList.toggle("responsive");
   for(let ti of titu){
    ti.classList.toggle("invisible");
   }
}
