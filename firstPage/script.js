// Função Hover
function chanceImg(){
    document.getElementById('arrow-down').src = "./firstPage/images/arrow-up.png";
}

function backImg(){
    document.getElementById('arrow-down').src = "./firstPage/images/arrow-down.png";
}

// Slider mudando automatico

let count = 1;
document.getElementById('radio1').checked = true;
    
setInterval( () => {
    nextImg();
}, 5000)

function nextImg(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
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