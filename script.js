const button = document.querySelector("button")
const inputItems = document.querySelectorAll("input")
const labelItems = document.querySelectorAll("label")

const submit = () => {
    inputItems.forEach((inputItems) => {
        inputItems.classList.add("activeInput");
        inputItems.removeAttribute("placeholder");
    })
    labelItems.forEach((labelItems)=> {
        labelItems.classList.add("active");
    })

}

button.addEventListener("click", submit)