// Função Hover
function chanceImg() {
    document.getElementById('arrow-down').src = "../global-images/arrow-up.png";
}

function backImg() {
    document.getElementById('arrow-down').src = "../global-images/arrow-down.png";
}

// Slider mudando automatico

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    nextImg();
}, 6000)

function nextImg() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

// Avaliar Estrelas

const stars = document.querySelectorAll(".stars span");

stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    })
})

// Pesquisar pelo input
// function handleClick(event) {
//     event.preventDefault();
//     let valorInput = document.getElementById("quantity")
//     if(codicao do valor do input) {
//          location.replace("localizacao 1")
//     } else {
//          location.replace("localizacao 2")
// }

const input = document.querySelector("#search");
const value = input.value;

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter")
    if(input.value === "japan"){
        window.location.href = "./japan/indexJP.html"
    } else if(input.value === "united states"){
        window.location.href = "./usa/indexUsa.html"
    } else if(input.value === "germany"){
        window.location.href = "./germany/index.html"
    } else if(input.value === "england"){
        window.location.href = "./england/index.html"
    } else if(input.value === "ireland"){
        window.location.href = "./ireland/index.html"
    }  
})

// input.value === "japan", "Japan", "JAPAN", "japão", "Japão", "JAPÃO") {
//     window.location.href = "./japan/indexJP.html"
// }

// if (input.value === "japan", "Japan", "JAPAN", "japão", "Japão", "JAPÃO") {
//     window.location.href = "./japan/indexJP.html"
// } else if (input.value === "eua", "Eua", "EUA", "united States", "United States", "United states", "UNITED STATES", "Estados unidos", "Estados Unidos", "estados Unidos") {
//     window.location.href = "./usa/indexUsa.html"
// } else if (input.value === "germany", "Germany", "GERMANY", "alemanha", "Alemanha", "ALEMANHA") {
//     window.location.href = "./germany/index.html"
// }