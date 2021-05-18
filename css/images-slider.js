const slider = document.querySelector("#slider");
/*Catch first section image*/
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
slider.insertAdjacentElement('afterbegin', sliderSectionLast);
/*Declare left and right buttons*/
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
/*Declare functionality for change to the next Slide image*/
function NextSlide(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
/*Add functionality to Right Button*/
btnRight.addEventListener('click', function(){
    NextSlide();
})
/*Declare functionality for change to the previous Slide image*/
function PreviousSlide(){
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
/*Add functionality to Left Button*/
btnLeft.addEventListener('click', function(){
    PreviousSlide();
})
/*Automatize action for change to the next Slide image*/
setInterval(function(){
    NextSlide()
}, 5000);