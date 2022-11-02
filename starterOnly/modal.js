function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
//const modalbg = document.querySelector(".bground");
const modalbg = document.getElementsByClassName("bground")[0]; 
//const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtns = document.getElementsByClassName("modal-btn");
//const formData = document.querySelectorAll(".formData");
const formDatas = document.getElementsByClassName("formData");

// add elements to DOM
const modalBground = document.getElementById("modalBground")
const modalContent = document.getElementById("modalContent");
const modalBody = document.getElementById("modal-body");
const modalForm = document.getElementById("modalForm");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const btnSubmits = document.getElementsByClassName("btn-submit");
const thxPopup = document.getElementById("thxPopup");
const thxPopupBtn = document.getElementById("thxPopup__btn");

const firstName = document.getElementById("first");
const errorMessages = document.getElementsByClassName("errorMessage");
const hiddenMessage = document.getElementsByClassName("hidden");

/* launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));*/

/* launch modal form
function launchModal() {
  modalbg.style.display = "block";
}*/

// Lancement du modal
for(const modalBtn of modalBtns) {
  modalBtn.addEventListener("click", function() {
  modalBground.style.display = "block";  
  })
};

// Fermeture du modal 
modalCloseBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

// Thank you pop-up 
for (const btnSubmit of btnSubmits) {
btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  modalForm.style.display = "none";
  thxPopup.style.display = "flex";
  })
};

// Fermeture de thank you pop up
thxPopupBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

// Validation saisie avec Regex
// Vérification du prénom
function regexTestFirstName(input) {
  let regex = /([A-Za-zéùàôöêëèçà]{1,}[A-Za-z-'éùàôöêëèçà]{2,30})/g;
  return regex.test(input);
};

function firstNameCheck() {
  let firstNameValue = firstName.value;
  if (regexTestFirstName(firstNameValue) === true) {
    errorMessages[0].classList.remove("hidden");
  } else {
    errorMessages[0].classList.add("hidden");
  }
};

// Lancement des fonctions de contrôle au click "submitForm"

function submitForm() {
  firstNameCheck();
}