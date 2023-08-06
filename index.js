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
