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

/* launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));*/

/* launch modal form
function launchModal() {
  modalbg.style.display = "block";
}*/

//launch modal
for(const modalBtn of modalBtns) {
  modalBtn.addEventListener("click", function() {
  modalBground.style.display = "block";  
  })
};

// close modal 
modalCloseBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
  }
);

// thank you pop-up 
for (const btnSubmit of btnSubmits) {
btnSubmit.addEventListener("click", function(e) {
  e.preventDefault();
  modalForm.style.display = "none";
  thxPopup.style.display = "flex";
})};

// close thank you pop up
thxPopupBtn.addEventListener("click", function() {
  modalBground.style.display = "none";
});