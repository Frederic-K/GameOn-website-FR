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
//const modalBody = document.getElementById("modal-body");
const modalForm = document.getElementById("modalForm");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const btnSubmit = document.getElementById("submitButton");
const thxPopup = document.getElementById("thxPopup");
const thxPopupBtn = document.getElementById("thxPopup__btn");
//const radioLocations = document.querySelectorAll('input[name = "location"]');
const radioLocations = document.getElementsByClassName("checkbox--location");
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

let invalidInput = 1;


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
    invalidInput++;
  }
};

// Vérification du nom 

function lastNameCheck() {
  let lastNameValue = lastName.value;
  if (regexTestName(lastNameValue) === true) {
    errorMessages[1].classList.add("hidden");
  } else {
    errorMessages[1].classList.remove("hidden");
    invalidInput++;
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
    invalidInput++;
  }
};

// Vérification de la date de naissance
//Fonctionnelle avec age min
/*function birthdateCheck() {
  let birthdayInput = new Date(birthdate.value);
  let todayDate = new Date();
  let minAge = 12;
  let birthdayYear = birthdayInput.getFullYear() + minAge;
  let birthdayMonth = birthdayInput.getMonth() + 1;
  let birthdayDay = birthdayInput.getDay() + 1;
  let todayDateYear = todayDate.getFullYear();
  let todayDateMonth = todayDate.getMonth() + 1;
  let todayDateDay = todayDate.getDay() + 1;
  let birthdayVar = birthdayYear + birthdayMonth + birthdayDay;
  let todayVar = todayDateYear + todayDateMonth + todayDateDay;
  console.log (birthdayVar);
  console.log (todayVar);
  if (todayVar > birthdayVar) {
    errorMessages[3].classList.add("hidden");
  } else {
    errorMessages[3].classList.remove("hidden");
  }
};*/

// Vérification de la date de naissance

function birthdateCheck() {
  let ageMin = 378691200000;// 12 ans à partir du 1/1/1970 
  let birthdateVar = Date.parse(birthdate.value) + ageMin; // trans birthdate.value (qui est au format YYYY-MM-DD donc normalement ISO 8601) en millisecondes depuis le 1/1/1970
  let todayDateVar = Date.now();
  console.log(birthdateVar);
  console.log(todayDateVar);
  if (todayDateVar > birthdateVar) {
    errorMessages[3].classList.add("hidden");
  } else {
    errorMessages[3].classList.remove("hidden");
    invalidInput++;
  }
};

// Vérifictaion du choix du lieu du tournoi

function locationCheck() {
  for (const radioLocation of radioLocations) {
    if (radioLocation.checked) {
      errorMessages[4].classList.add("hidden");
      breack;
    } else {
      errorMessages[4].classList.remove("hidden");
      invalidInput++;
    }
  }
};
/*<<< j'ai une erreur ds la console : Uncaught ReferenceError: breack is not defined ???
mais je ne sais pas si c'est labsence de label qui pose pb...>>>>>*/

// Vérification consentement Conditions Générales d'Utilisation

function cguCheck() {
  if (checkboxCGU.checked) {
    errorMessages[5].classList.add("hidden");
  } else {
    errorMessages[5].classList.remove("hidden");
    invalidInput++;
  }
};

// Lancement des fonctions de contrôle au click "submitForm"

function submitSouscription() {
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  birthdateCheck();
  locationCheck();
  cguCheck();
};

//Prévention propagation 

modalForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });

// Thank you pop-up 

function thankYouPopup(e) {
  e.preventDefault();
  if (invalidInput === 1) {
    modalForm.style.display = "none";
    thxPopup.style.display = "flex";
  } else {
    thxPopup.style.display = "none";
  }
};
    
btnSubmit.addEventListener("click", thankYouPopup());

// Fermeture de thank you pop up

thxPopupBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

