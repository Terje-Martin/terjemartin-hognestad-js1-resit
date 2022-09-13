const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event) {
    event.preventDefault();
 
    if (firstName.value.trim().length > 0) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (lastName.value.trim().length > 0) {
        lastNameError.style.display = "none";
     } else {
        lastNameError.style.display = "block";
     }
 
    if (subject.value.trim().length > 10) {
       subjectError.style.display = "none";
    } else {
       subjectError.style.display = "block";
    }
 
    if (validateEmail(email.value) === true) {
       emailError.style.display = "none";
    } else {
       emailError.style.display = "block";
    }
 
    if (message.value.trim().length > 25) {
       messageError.style.display = "none";
    } else {
       messageError.style.display = "block";
    }
 
 }
 
 form.addEventListener("submit", validateForm);
 
 function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
 }