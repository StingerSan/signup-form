const button = document.querySelector("button")
const inputItem1 = document.getElementById("FirstName")
const inputItem2 = document.getElementById("LastName")
const inputItem3 = document.getElementById("EmailAddress")
const inputItem4 = document.getElementById("Password")
const labelItem1 = document.getElementById("ErrorFirstName")
const labelItem2 = document.getElementById("ErrorLastName")
const labelItem3 = document.getElementById("ErrorEmailAddress")
const labelItem4 = document.getElementById("ErrorPassword")

const submit = () => {
    if (inputItem1.value === "") {
        inputItem1.classList.add("activeInput");
        inputItem1.removeAttribute("placeholder");
        labelItem1.classList.add("active")
    } else
        inputItem1.classList.remove("activeInput"), labelItem1.classList.remove("active");

    if (inputItem2.value === "") {
        inputItem2.classList.add("activeInput");
        inputItem2.removeAttribute("placeholder");
        labelItem2.classList.add("active")
    } else
        inputItem2.classList.remove("activeInput"), labelItem2.classList.remove("active");

    if (inputItem3.value === "") {
        inputItem3.classList.add("activeInput");
        inputItem3.removeAttribute("placeholder");
        labelItem3.classList.add("active")
    } else
        inputItem3.classList.remove("activeInput"), labelItem3.classList.remove("active");

    if (inputItem4.value === "") {
        inputItem4.classList.add("activeInput");
        inputItem4.removeAttribute("placeholder");
        labelItem4.classList.add("active")
    } else
        inputItem4.classList.remove("activeInput"), labelItem4.classList.remove("active");

}
button.addEventListener("click", submit)