function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// add elements to DOM
const modalBground = document.getElementById("modalBground")
const modalContent = document.getElementById("modalContent");
const modalBody = document.getElementById("modal-body");
const modalForm = document.getElementById("modalform");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const thxPopup = document.getElementById("thxPopup");
const btnSubmit = document.getElementById("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal 
modalCloseBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

// thank you pop-up 
