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