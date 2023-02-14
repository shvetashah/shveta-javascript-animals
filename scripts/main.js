//grab the animal buttons
const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")
//activate animal buttons
animal_buttons.forEach(button => {
    button.addEventListener("change", event => {
        text.innerHTML = "Here is a picture of a " + button.value
        photo.src = "images/" + button.value + ".jpg"
    })
})