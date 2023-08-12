// Função Hover Dropdown
function chanceImg(){
    document.getElementById('arrow-down').src = "../global-images/arrow-up.png";
}

function backImg(){
    document.getElementById('arrow-down').src = "../global-images/arrow-down.png";
}

// Escrever texto sozinho
var el = document.querySelector('#visit');
var text = 'Visit'
var interval = 200;

function showtext(el, text, interval) {
    var char = text.split('').reverse();

    var typer = setInterval(function() {

        if (!char.length) {
            return clearInterval(typer)
        }

        var next = char.pop();

        el.innerHTML += next;
    }, interval);
}

var el2 = document.querySelector('#japan');
var text2 = 'Japan'
var interval = 200;

function showtext2(el2, text2, interval) {
    var char = text2.split('').reverse();

    var typer = setInterval(function() {

        if (!char.length) {
            return clearInterval(typer)
        }

        var next = char.pop();

        el2.innerHTML += next;
    }, interval);
}

showtext(el, text, interval);
showtext2(el2, text2, interval);

// Função Hover
function mudarImgLocation() {
    document.getElementById('img-location').src = "../global-images/location-red.png"
}

function voltarImg() {
    document.getElementById('img-location').src = "../global-images/location-white.png";
    document.getElementById('img-places').src = "../global-images/places-white.png";
    document.getElementById('img-user').src = "../global-images/section-user-white.png";
}

function mudarImgPlaces() {
    document.getElementById('img-places').src = "../global-images/places-red.png"
}

function mudarImgUser() {
    document.getElementById('img-user').src = "../global-images/section-user-red.png"
}

// Slider Imagens
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const textImg = document.querySelectorAll('.description');

controls.forEach((control) => {
    control.addEventListener('click', () => {
        const isLeft =
            control.classList.contains('prev-button');

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach((item) => item.classList.remove("current-item"));

        items[currentItem].scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });

        items[currentItem].classList.add("current-item");

        textImg.forEach((description) => description.classList.remove('container-img-text'));

        textImg[currentItem].classList.add("container-img-text");
    });
});

// Readmore Aside
var button1 = document.getElementById("show-readmore1");
var button2 = document.getElementById("show-readmore2");
var button3 = document.getElementById("show-readmore3");


button1.addEventListener('click', () => {
    var container = document.querySelector(".readmore1");

    if(container.style.display === "none"){
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
})

button2.addEventListener('click', () => {
    var container = document.querySelector(".readmore2");

    if(container.style.display === "none"){
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
})

button3.addEventListener('click', () => {
    var container = document.querySelector(".readmore3");

    if(container.style.display === "none"){
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
})

var backbutton1 = document.querySelector(".back-readmore1");
var backbutton2 = document.querySelector(".back-readmore2");
var backbutton3 = document.querySelector(".back-readmore3");

backbutton1.addEventListener('click', () => {
    var container = document.querySelector(".readmore1");

    if(container.style.display === "flex"){
        container.style.display = "none";
    } else {
        container.style.display = "flex";
    }
})

backbutton2.addEventListener('click', () => {
    var container = document.querySelector(".readmore2");

    if(container.style.display === "flex"){
        container.style.display = "none";
    } else {
        container.style.display = "flex";
    }
})

backbutton3.addEventListener('click', () => {
    var container = document.querySelector(".readmore3");

    if(container.style.display === "flex"){
        container.style.display = "none";
    } else {
        container.style.display = "flex";
    }
})