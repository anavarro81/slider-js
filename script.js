let sliderInner$$ = document.querySelector(".slider-inner")
let allImages$$ = document.querySelectorAll("img")

let index = 0;
let nImagenes = allImages$$.length

setInterval(() => {
    
    desplazamiento = index * -100
    sliderInner$$.style.transform = "translateX("+ desplazamiento + "%)";    
    index++;
    
    if (index > nImagenes-1) {
        index = 0
    }

}, 3000);