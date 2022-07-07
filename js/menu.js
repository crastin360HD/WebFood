// Declaramos las variables

const menu = document.querySelector(".menu__container__header");

let iconMenu = document.querySelector(".menu-Icon");

let ligthBlack = document.getElementById("ligthShow")

let etiquetas = document.querySelector(".container__nav");

iconMenu.addEventListener("click", ()=>{
    menu.classList.add("done");
    ligthBlack.style.opacity = "1";
    ligthBlack.style.pointerEvents = "unset";
    etiquetas.style.opacity = "1";
})

ligthBlack.addEventListener("click", ()=>{
    menu.classList.remove("done");
    ligthBlack.style.opacity = "0";
    etiquetas.style.opacity = "0"; /* !Importante */
    ligthBlack.style.pointerEvents = "none";
})

console.log(menu)
console.log(iconMenu)

/* Desplagar buscador */

let iconBuscar = document.querySelector(".--onSearch");

let containInput = document.querySelector(".container__input");

let closeIcon = document.getElementById("closeSarch");

/* Icons a ocultar */

let darkIcon = document.getElementById("darkModeIcon");

let userIcon = document.getElementById("userIcon");

let UserSignUp = document.getElementById("signIcon");

iconBuscar.addEventListener("click", ()=>{
    containInput.classList.add("showInput");
    darkIcon.style.opacity = "0";
    closeIcon.style.opacity = "1";
    userIcon.style.opacity = "0";
    UserSignUp.style.opacity = "0"
})

closeIcon.addEventListener("click", ()=> {
    containInput.classList.remove("showInput")
        darkIcon.style.opacity = "1";
        closeIcon.style.opacity = "0";
        userIcon.style.opacity = "1";
        UserSignUp.style.opacity = "1"
})

/* LightBox programing */

/* Declaramos las variables */

const imagenes = document.querySelectorAll(".gallery__img");

const imagenesLight = document.querySelector(".agregarImagen");

const contenedorLight = document.querySelector(".img-light");

const figureImg = document.querySelectorAll(".gallery__picture");

/* FuncionAParecerImagen */

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
}

contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")
    }
})

console.log(imagenes);
console.log(contenedorLight);