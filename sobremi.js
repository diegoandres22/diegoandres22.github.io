function responsiveMenu(){
    var x = document.getElementById( "nav");
   
    var titu=document.querySelectorAll(".titu");
   x.classList.toggle("responsive");
   for(let ti of titu){
    ti.classList.toggle("invisible");
   }
}
