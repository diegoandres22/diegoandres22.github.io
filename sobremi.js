const rayas = document.getElementById("icono-nav");
const nav = document.getElementById("nav");

rayas.addEventListener("click", () =>{
   
   nav.classList.toggle("responsive")
})


 const conteneLoadin= document.querySelector(".conteneLoadin");
 window.setInterval(() => {
     conteneLoadin.style.opacity='0';
     conteneLoadin.style.visibility='hidden';
     conteneLoadin.style.zIndex='0';
    
 }, 3000);


