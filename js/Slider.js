let slideIndex = 2;
showSlides(slideIndex);

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function(){
    showSlides(slideIndex += 1);
    
});

prev.addEventListener('click', function (){
    showSlides(slideIndex -= 1);
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.item');
    let dots = document.getElementsByClassName("slider-dots_item");
    if(n > slides.length){
        slideIndex = 1;
    }
    if( n < 1) {
        slideIndex = slides.length;
    }
    
    for(let slide of slides) {
        slide.style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += " active";
}