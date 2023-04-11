/* CARTAS DE RESEÑA */

// SECCION

const rvwSection = document.querySelector('#in-reviews');

// CARTAS 

const rvwCards = rvwSection.querySelectorAll('.rvw-card');

// BOTONES 

const rvwBtnLeft = rvwSection.querySelector('#rvw-bot_btn-left');
const rvwBtnRight = rvwSection.querySelector('#rvw-bot_btn-right');

// FUNCION BOTON IZQUIERDA

function rvwLeft(){
    for (let i = 0; i < rvwCards.length; i++){
        if(rvwCards[i].classList.contains('rvw-active')){
            let rvwPrevCard = rvwCards[i];
            console.log(rvwCards[i]);
            rvwPrevCard.style = "transform: translateX(100%);";
            rvwPrevCard.classList.toggle('rvw-active');
            rvwPrevCard.classList.toggle('rvw-inactive');
            console.log(rvwCards[i]);
            if(i == 0){
                let i = rvwCards.length - 1;
                console.log(rvwCards[i]);
                rvwCards[i].classList.toggle('rvw-active');
                rvwCards[i].classList.toggle('rvw-inactive');
                setTimeout(()=>{
                    rvwPrevCard.style = "transform: translateX(0%);";
                },1000);
                break;
            } else {
            i--;
            rvwCards[i].classList.toggle('rvw-active');
            rvwCards[i].classList.toggle('rvw-inactive');
            setTimeout(()=>{
                rvwPrevCard.style = "transform: translateX(0%);";
            },1000);
            };
        };
    };
};

rvwBtnLeft.addEventListener('click',rvwLeft);

// FUNCION BOTON DERECHA

function rvwRight(){
    for (let i = 0; i < rvwCards.length; i++){
        if(rvwCards[i].classList.contains('rvw-active')){
            let rvwPrevCard = rvwCards[i];
            rvwPrevCard.style = "transform: translateX(-100%);";
            rvwPrevCard.classList.toggle('rvw-active');
            rvwPrevCard.classList.toggle('rvw-inactive');
            if(i == rvwCards.length - 1){
                let i = 0;
                rvwCards[i].classList.toggle('rvw-active');
                rvwCards[i].classList.toggle('rvw-inactive');
                setTimeout(()=>{
                    rvwPrevCard.style = "transform: translateX(0%);";
                },1000);
                break;
            } else {
            i++;
            rvwCards[i].classList.toggle('rvw-active');
            rvwCards[i].classList.toggle('rvw-inactive');
            setTimeout(()=>{
                rvwPrevCard.style = "transform: translateX(0%);";
            },1000);
            };
        };
    };
};

rvwBtnRight.addEventListener('click',rvwRight);

/* AVANCE AUTOMATICO */

setInterval(()=>{rvwRight()}, 8000);