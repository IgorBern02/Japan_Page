// Função Hover
function mudarImgLocation(){
    document.getElementById('img-location').src="./images/location-red.png"
}

function voltarImg(){
    document.getElementById('img-location').src="./images/location-white.png";
    document.getElementById('img-places').src="./images/places-white.png";
    document.getElementById('img-user').src="./images/section-user-white.png";
}

function mudarImgPlaces(){
    document.getElementById('img-places').src="./images/places-red.png"
}

function mudarImgUser(){
    document.getElementById('img-user').src="./images/section-user-red.png"
}

// Slider Imagens
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
};

function showSlider(){
    slider[currentSlide].classList.add('on');
};

function prevSlider(){
    hideSlider();   
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
};

function nextSlider(){
    hideSlider();
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
};

btnPrev.addEventListener('click', prevSlider);
btnNext.addEventListener('click', nextSlider);