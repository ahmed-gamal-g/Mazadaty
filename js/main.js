let downOne = document.querySelector(".down-one")
let downtwo = document.querySelector(".down-two")
let downthree = document.querySelector(".down-three")
let downfour = document.querySelector(".down-four")
let downfive = document.querySelector(".down-five")

let DisplayOne = document.querySelector(".div-diplay-one")
let Displaytwo = document.querySelector(".div-diplay-two")
let Displaythree = document.querySelector(".div-diplay-three")
let Displayfour = document.querySelector(".div-diplay-four")
let Displayfive = document.querySelector(".div-diplay-five")


downOne.onclick = function () {
    DisplayOne.classList.toggle("active")
}

downtwo.onclick = function () {
    Displaytwo.classList.toggle("active")
}

downthree.onclick = function () {
    Displaythree.classList.toggle("active")
}

downfour.onclick = function () {
    Displayfour.classList.toggle("active")
}

downfive.onclick = function () {
    Displayfive.classList.toggle("active")
}