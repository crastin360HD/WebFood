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
    etiquetas.style.opacity = "0";
})

console.log(menu)
console.log(iconMenu)

/* Desplagar buscador */

let iconBuscar = document.querySelector(".--onSearch");

let containInput = document.querySelector(".container__input");


iconBuscar.addEventListener("click", ()=>{
    containInput.classList.toggle("showInput")
})