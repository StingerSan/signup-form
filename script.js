const button = document.querySelector("button")
const inputFirstName = document.getElementById("FirstName")
const inputLastName = document.getElementById("LastName")
const inputEmailAddress = document.getElementById("EmailAddress")
const inputPassword = document.getElementById("Password")
const labelErrorFirstName = document.getElementById("ErrorFirstName")
const labelErrorLastName = document.getElementById("ErrorLastName")
const labelErrorEmailAddress = document.getElementById("ErrorEmailAddress")
const labelErrorPasswoed = document.getElementById("ErrorPassword")
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const submit = () => {
    if (inputFirstName.value === "") {
        inputFirstName.classList.add("activeInput");
        inputFirstName.removeAttribute("placeholder");
        labelErrorFirstName.classList.add("active");
    } else
        inputFirstName.classList.remove("activeInput"), labelErrorFirstName.classList.remove("active");

    if (inputLastName.value === "") {
        inputLastName.classList.add("activeInput");
        inputLastName.removeAttribute("placeholder");
        labelErrorLastName.classList.add("active");
    } else
        inputLastName.classList.remove("activeInput"), labelErrorLastName.classList.remove("active");

    if (inputEmailAddress.value === "", !inputEmailAddress.value.match(emailRegex)) {
        inputEmailAddress.classList.add("activeInput");
        inputEmailAddress.removeAttribute("placeholder");
        labelErrorEmailAddress.classList.add("active");
    } else
        inputEmailAddress.classList.remove("activeInput"), labelErrorEmailAddress.classList.remove("active");

    if (inputPassword.value === "") {
        inputPassword.classList.add("activeInput");
        inputPassword.removeAttribute("placeholder");
        labelErrorPasswoed.classList.add("active");
    } else
        inputPassword.classList.remove("activeInput"), labelErrorPasswoed.classList.remove("active");

}
button.addEventListener("click", submit)