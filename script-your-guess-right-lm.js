//For stylesheets

import "./style-lm-right.css"

//DOM ELEMENTS

const productNameExists = document.querySelector(".lm-r-result-subtitle");
const resultDescrip = document.querySelector(".lm-r-result-description");
const btnBack = document.querySelector(".lm-r-btn-back-to-game");

//URLS

const currentUrl = window.location.href;
const port = currentUrl.split(':')[2].split('/')[0];

const urlParams = new URLSearchParams(window.location.search);
const correctOnes = urlParams.get('correctOnes');

let correctOnesBack = 0;

if (correctOnes > correctOnesBack) {
    correctOnesBack = correctOnes;
}

//FUNCTIONS

function getQuestionsIDs () {
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:8000/questions/api/used/`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(`We have an error: ${error}`);
        })
    })
}
async function currentQuestionID () {
    const data = await getQuestionsIDs();
    const number = data[data.length - 1].question_id;
    return number;
}
async function getCurrentQuestion () {
    const currentID = await currentQuestionID();
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:8000/questions/api/${currentID}/`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(`We have an error: ${error}.`)
        })
    })
}

    async function formFeedback () {
        try {
            const result = await getCurrentQuestion();
            let item = result;
            resultDescrip.textContent = item.question;
            if (item.is_true === true) {
                productNameExists.textContent = `${item.title} СУЩЕСТВУЕТ`;
            } else {
                productNameExists.textContent = `${item.title} НЕ СУЩЕСТВУЕТ`;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async function redirect () {
        const totalAmount = await getQuestionsIDs();
        if (totalAmount.length % 6 === 0) {
            if (btnBack) {
                btnBack.onclick = () => {
                    window.location.href=`http://localhost:${port}/dark-mode-result.html?correctOnesBack=${correctOnesBack}`;
                }
            }
            } else {
                if (btnBack) {
                    btnBack.onclick = () => {
                        window.location.href=`http://localhost:${port}/light-mode-questions.html?correctOnesBack=${correctOnesBack}`;
                }
            }
        }
    }

window.addEventListener("DOMContentLoaded", () => {
        formFeedback();
        redirect();
})