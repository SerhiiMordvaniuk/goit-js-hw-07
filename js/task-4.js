"use strict"

const form = document.querySelector(".login-form")
const user = [];

form.addEventListener("submit", (event) => {
    if (event.target.elements.email.value == "" || event.target.elements.password.value == "") {
        alert("All form fields must be filled in")
    }
    else {
        event.preventDefault()
        user.email = event.target.elements.email.value;
        user.password = event.target.elements.password.value;
        console.log(user);
        event.target.reset()
    }
})