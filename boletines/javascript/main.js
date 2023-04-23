//Obtener elementos de la clase .close
let link = document.querySelectorAll('.close')

//recorerlos
link.forEach(function(link) {

    //Agregar un evento click a cada uno 
     link.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //quitar las clases de animacion que conserva ".content"
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate_animated");



        //add clases para animar su salida.
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate_animated");

        

        setTimeout(function(){
            location.href = "/";
        },600);
        return false;
     });
});



