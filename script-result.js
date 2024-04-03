//For stylesheets

import "./style-dm-result.css";

//DOM Elements
let result = document.querySelector(".result-score");
let getWheelOfFortune = document.querySelector(".btn-get-prizes");

//URLS

const urlParams = new URLSearchParams(window.location.search);
const correctOnesBack = urlParams.get('correctOnesBack');

// Functions

result.textContent = `${correctOnesBack}/6`;

window.addEventListener("DOMContentLoaded", () => {
    if (getWheelOfFortune) {
        getWheelOfFortune.onclick = () => {
            alert("Здесь должна быть ссылка на колесо фортуны, но её нет!");
        }
    }
})