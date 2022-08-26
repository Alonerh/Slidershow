let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width =  
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) { // Volta para o final
        currentSlide = totalSlides - 1;
    }
    updateMargin() // Atualiza os dados finais
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) { // Volta para o 0
        currentSlide = 0;
    }
    updateMargin()
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}

setInterval(goNext, 5000);