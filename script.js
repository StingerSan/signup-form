const button = document.querySelector("button")
const inputItem1 = document.getElementById("FirstName")
const inputItem2 = document.getElementById("LastName")
const inputItem3 = document.getElementById("EmailAddress")
const inputItem4 = document.getElementById("Password")
const labelItems = document.querySelectorAll("label")

const submit = () => {
    if (inputItem1.value === "") {
        inputItem1.classList.add("activeInput");
        inputItem1.removeAttribute("placeholder");
    } else
        inputItem1.classList.remove("activeInput");

    if (inputItem2.value === "") {
        inputItem2.classList.add("activeInput");
        inputItem2.removeAttribute("placeholder");
    } else
        inputItem2.classList.remove("activeInput");

    if (inputItem3.value === "") {
        inputItem3.classList.add("activeInput");
        inputItem3.removeAttribute("placeholder");
    } else
        inputItem3.classList.remove("activeInput");

    if (inputItem4.value === "") {
        inputItem4.classList.add("activeInput");
        inputItem4.removeAttribute("placeholder");
    } else
        inputItem4.classList.remove("activeInput");


}
button.addEventListener("click", submit)