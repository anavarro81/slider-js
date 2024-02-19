let sliderInner$$ = document.querySelector(".slider-inner")

let index = 0;

setInterval(() => {
    
    desplazamiento = index * -100
    sliderInner$$.style.transform = "translateX("+ desplazamiento + "%)";    
    index++;
    
    if (index > 4) {
        index = 0
    }

}, 3000);