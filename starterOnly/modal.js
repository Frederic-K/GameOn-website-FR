function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Elements du DOM

const modalbg = document.getElementsByClassName("bground")[0]; 
const modalBtns = document.getElementsByClassName("modal-btn");
const formDatas = document.getElementsByClassName("formData");
const modalContent = document.getElementById("modalContent");
const modalForm = document.getElementById("modalForm");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const thxPopups = document.getElementsByClassName("thxPopup");
const thxPopupBtn = document.getElementById("thxPopup__btn");

const btnSubmit = document.getElementsByClassName("btn-submit")[0];
const errorMessages = document.getElementsByClassName("errorMessage");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numberTournament = document.getElementById("quantity");
const radioLocations = document.getElementsByClassName("checkbox--location");
const checkboxCGU = document.getElementById("checkbox1");

// Variables pour la validation finale du formulaire

let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isBirthdateValid = false;
let isNumberTournament = false;
let isRadioLocation = false;
let isCheckboxCGUValid = false;

// Lancement du modal

for(const modalBtn of modalBtns) {
    modalBtn.addEventListener("click", function() {
    modalBground.style.display = "block";  
    })
};

// Fermeture du modal via croix en haut à droite

modalCloseBtn.addEventListener("click", function() {
    modalBground.style.display = "none";
});

// Fonction de vérification des nom et prénom

// Vérification du prénom

function regexTestName(input) {
    let regex = /([A-Za-zéùàôöêëèçà]{1,}[A-Za-z-'éùàôöêëèçà]{2,30})/g;
    return regex.test(input);
  };

function firstNameCheck() {
    let firstNameValue = firstName.value;
    if (regexTestName(firstNameValue) === false) {
        errorMessages[0].classList.remove("hidden");
        isFirstNameValid = false;
    } else {
        errorMessages[0].classList.add("hidden");
        isFirstNameValid = true;
    }
 };

  // Vérification du nom 
  
function lastNameCheck() {
    let lastNameValue = lastName.value;
    if (regexTestName(lastNameValue) === false) {
      errorMessages[1].classList.remove("hidden");
      isLastNameValid = false;
    } else {
      errorMessages[1].classList.add("hidden");
      isLastNameValid = true;
    }
 };

// Fonction de vérification du mail

function regexTestEmail(input) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    return regex.test(input);
  };

function emailCheck() {
    let emailValue = email.value;
    if (regexTestEmail(emailValue) === false) {
      errorMessages[2].classList.remove("hidden");
      isEmailValid = false;
    } else {
      errorMessages[2].classList.add("hidden");
      isEmailValid = true;
    }
 };

// Vérification de la date de naissance

function birthdateCheck() {
    let ageMin = 378691200000;// 12 ans à partir du 1/1/1970 
    let birthdateVar = Date.parse(birthdate.value) + ageMin; // birthdate.value, qui est au format YYYY-MM-DD donc normalement ISO 8601, en millisecondes depuis le 1/1/1970
    let todayDateVar = Date.now(); // récupération de la date du jour en millisecondes depuis 1/1/1970
    console.log(birthdateVar);
    console.log(todayDateVar);
    if ((birthdate.value === '') || (birthdate.value === null)){
      errorMessages[3].classList.remove("hidden");
      isBirthdateValid = false;
    } else if (todayDateVar < birthdateVar) {
      errorMessages[3].classList.remove("hidden");
      isBirthdateValid = false;
    } else {
      errorMessages[3].classList.add("hidden");
      isBirthdateValid = true;
    }
};

  // Vérification du nombre de tournoi

function regexTestTournament(input) {
  let regex = /^[1-9]{0,1}[0-9]$/g;
  return regex.test(input);
  }; 
function numberOfTournamentCheck() {
  let numberOfTournamentValue = numberTournament.value;
  if ((numberTournament === '') || (numberTournament === null)){
    errorMessages[4].classList.remove("hidden");
    isNumberTournament = false;
  } else if (regexTestTournament(numberOfTournamentValue) === false){
    errorMessages[4].classList.remove("hidden");
    isNumberTournament = false;
  } else {
    errorMessages[4].classList.add("hidden");
    isNumberTournament = true;
  }
};

  // Vérifictaion du choix du lieu du tournoi

function locationCheck() {
    for (const radioLocation of radioLocations) {
      if (!radioLocation.checked) {
        errorMessages[5].classList.remove("hidden");
        isRadioLocation = false;
      } else {
        errorMessages[5].classList.add("hidden");
        isRadioLocation = true;
        break;
      }
    }
  };

  // Vérification consentement Conditions Générales d'Utilisation

function cguCheck() {
    if (!checkboxCGU.checked) {
      errorMessages[6].classList.remove("hidden");
      isCheckboxCGUValid = false;
    } else {
      errorMessages[6].classList.add("hidden");
      isCheckboxCGUValid = true;
    }
  };

// Validation du formulaire

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    validation();
});

function validation() {
    firstNameCheck();
    lastNameCheck();
    emailCheck();
    birthdateCheck();
    numberOfTournamentCheck();
    locationCheck();
    cguCheck();
    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isRadioLocation && isCheckboxCGUValid === true) {
        modalForm.classList.add("hidden");
        thxPopups[0].classList.remove("hidden");
    } else {
        modalForm.classList.remove("hidden");
        thxPopups[0].classList.add("hidden");
    }
};

// Fermeture de thank you pop up

thxPopupBtn.addEventListener("click", function() {
    modalBground.style.display = "none";
    }
  );
  