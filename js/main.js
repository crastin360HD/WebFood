const slider = document.getElementById("slider");

let sliderSecction = document.querySelectorAll(".slider__seccion");
let sliderSecctionLast = sliderSecction[sliderSecction.length -1];

const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");

slider.insertAdjacentElement('afterbegin', sliderSecctionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__seccion")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "-100%";
    },500)

}

function prev(){
    let sliderSecction = document.querySelectorAll(".slider__seccion");
    let sliderSecctionLast = sliderSecction[sliderSecction.length -1];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSecctionLast);
        slider.style.marginLeft = "-100%";
    },500)
    
}

btnRight.addEventListener("click", ()=>{
    Next()
})

btnLeft.addEventListener("click", ()=>{
    prev()
});

setInterval (function(){
    Next()
},5000)

