


function desordenar(){
   piezas = piezas.sort(function(){return Math.random() -0.5});    
    //console.log(piezas);
}

function desmarcarTodo(){
    for( var i=0; i<=8 ; i++){
    document.getElementById("img"+ i).style.border = null;
    }  
}

function seleccionar(casilla){
    
    num_click = num_click + 1;

    if(num_click == 1){
        casilla_primer_click = casilla;

        desmarcarTodo();

        document.getElementById("img"+ casilla).style.border = "solid 2px blue";
       // console.log("el primer click es " +casilla_primer_click);
    }
  
    if ( num_click == 2){

    var casilla_click_segundo = casilla;
       
   // console.log(piezas)
    
    var aux = piezas[casilla_primer_click];
    piezas[casilla_primer_click] = piezas[casilla_click_segundo];
    piezas[casilla_click_segundo] = aux;

    //console.log(piezas);
    num_click = 0;

    pintarPuzzle(); 

       desmarcarTodo();

    var correcto = comprobarPuzzle();
    if( correcto == true ){
       setInterval(() => {
        alert("perfecto, ahora contáctame....");
       }, 300); 
       }
    }
}
    
function comprobarPuzzle(){

    var correcto= true;
    for(var i=0; i<=8; i++){
        if(piezas[i] != i){
            correcto = false;
        }
    }
     return correcto;
 
}
function pintarPuzzle(){
        for ( var casilla=0; casilla<=8 ; casilla++){

            var imagen = piezas[casilla];

    document.getElementById("img"+casilla).src="imagen/puzzle" +imagen+ ".jpg";
            }  
    }
    var piezas = [0,1,2,3,4,5,6,7,8];

    var num_click = 0;
    
    var casilla_primer_click;

    desordenar();
    
    pintarPuzzle();