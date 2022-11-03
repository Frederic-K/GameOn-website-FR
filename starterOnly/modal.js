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

const errorMessages = document.getElementsByClassName("errorMessage");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");

const checkboxCGU = document.getElementById("checkbox1");

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
// Fermeture du modal via croix en haut à droite
modalCloseBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

// Contrôle "Never trust user input!"
// Vérification du prénom
function regexTestName(input) {
  let regex = /([A-Za-zéùàôöêëèçà]{1,}[A-Za-z-'éùàôöêëèçà]{2,30})/g;
  return regex.test(input);
};
function firstNameCheck() {
  let firstNameValue = firstName.value;
  if (regexTestName(firstNameValue) === true) {
    errorMessages[0].classList.add("hidden");
  } else {
    errorMessages[0].classList.remove("hidden");
  }
  /* j'ai vue des fonctions de test avec RegEx qui indique "return false;"
  après le "else" ...*/
};
// Vérification du nom 
function lastNameCheck() {
  let lastNameValue = lastName.value;
  if (regexTestName(lastNameValue) === true) {
    errorMessages[1].classList.add("hidden");
  } else {
    errorMessages[1].classList.remove("hidden");
  }
};
// Vérification du mail
function regexTestEmail(input) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  return regex.test(input);
};
function emailCheck() {
  let emailValue = email.value;
  if (regexTestEmail(emailValue) === true) {
    errorMessages[2].classList.add("hidden");
  } else {
    errorMessages[2].classList.remove("hidden");
  }
};

// Vérifictaion de la date de naissance
function regexBirthdate(input) {
  let regex = /^\d{2}-\d{2}-\d{4}$/g;
  return regex.test(input);
}
function birthdateCheck() {
  let birthdateValue = birthdate.value;
  if (regexBirthdate(birthdateValue) === true) {
    errorMessages[3].classList.add("hidden");
  } else {
    errorMessages[3].classList.remove("hidden");
  }
};

// Vérification checkbox "checked" des Conditions Générales d'Utilisation
function cguCheck() {
  if (checkboxCGU.checked) {
    errorMessages[4].classList.add("hidden");
  } else {
    errorMessages[4].classList.remove("hidden");
  }
};

// Lancement des fonctions de contrôle au click "submitForm"
function submitSouscription() {
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  birthdateCheck();
  cguCheck();
};
modalForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  
// Thank you pop-up 
/*for (const btnSubmit of btnSubmits) {
btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  modalForm.style.display = "none";
  thxPopup.style.display = "flex";
  })
};*/
// Fermeture de thank you pop up
thxPopupBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

