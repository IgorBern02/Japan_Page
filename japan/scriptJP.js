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
    document.getElementById('img-location').src = "./images/location-red.png"
}

function voltarImg() {
    document.getElementById('img-location').src = "./images/location-white.png";
    document.getElementById('img-places').src = "./images/places-white.png";
    document.getElementById('img-user').src = "./images/section-user-white.png";
}

function mudarImgPlaces() {
    document.getElementById('img-places').src = "./images/places-red.png"
}

function mudarImgUser() {
    document.getElementById('img-user').src = "./images/section-user-red.png"
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
