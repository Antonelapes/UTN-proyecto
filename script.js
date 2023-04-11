// MODAL
var modal = document.getElementById("modal");

// Obtener el botón
var btn = document.getElementById("open-modal-btn");

// <span> de cierre
var span = document.getElementsByClassName("close")[0];

// Abrir el Modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el Modal
span.onclick = function() {
  modal.style.display = "none";
}

// Se cierra cuando presionas fuera del Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Funcionamiento del Modal
var wizardForm = document.getElementById("wizard-form");
wizardForm.addEventListener("submit", function(event) {
  event.preventDefault();
  modal.style.display = "none";
});
var step1NextBtn = document.getElementById("step-1-next");
var step1 = document.getElementById("step-1");
var step2 = document.getElementById("step-2");
step1NextBtn.addEventListener("click", function() {
  step1.style.display = "none";
  step2.style.display = "block";
});




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