//For stylesheets
import "./style-dm-questions.css"

// DOM ELEMENTS
const productName = document.querySelector('.dm-q-product-name');
const productLogo = document.querySelector('.dm-q-product-pic');
const productDescription = document.querySelector('.dm-q-product-description');
const boxForCurrent = document.querySelector('.dm-q-current-question');
const btnTrue = document.querySelector('.dm-q-btn-true');
const btnFalse = document.querySelector('.dm-q-btn-false');

//URLS
const currentUrl = window.location.href;
const port = currentUrl.split(':')[2].split('/')[0];
const urlParams = new URLSearchParams(window.location.search);
const correctOnesBack = urlParams.get('correctOnesBack');

let correctOnes = 0;

if (correctOnesBack > correctOnes) {
    correctOnes = correctOnesBack;
}

let item;

function rndNmbr() {
    return Math.floor((Math.random() * 20) + 1);
}

function getQuestionID () {
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
            reject(`We have an error: ${error}.`)
        })
    })
}

async function checkQuestionID (number) {
    const allIDs = await getQuestionID();
    let questionIDs = [];
    for (let i=0; i<allIDs.length; i++) {
        questionIDs.push(allIDs[i].question_id)
    }
    return questionIDs.includes(number);
}
async function brandNewID () {
    let newNumber = rndNmbr();

    while (await checkQuestionID(newNumber)) {
        newNumber = rndNmbr();
    }
    return newNumber;
}
async function pushID(data) {
    return await fetch('http://127.0.0.1:8000/questions/api/used/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
}

async function getQuestions () {
    let toBePushed = {
        question_id: "",
    }
    const questionID = await brandNewID();
    console.log(questionID);
    toBePushed.question_id = questionID;
    const response = await pushID(toBePushed);
    if (response.status === 201) {
    console.log("Successfully added to data base!")
    }
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:8000/questions/api/${questionID}/`)
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
async function formQuestion () {
    try {
        const result = await getQuestions();
        console.log(result);
        item = result;
        productName.textContent = item.title;
        productLogo.src = item.image;
        productLogo.alt = item.title;
        productDescription.textContent = item.question;
        
        if (btnTrue) {
            btnTrue.onclick = () => {
                if (item.is_true === true) {
                    correctOnes++;
                    console.log(item.is_true);
                    console.log(`Good boy! The product ${item.title} exists!`);  
                    window.location.href= `http://localhost:${port}/light-mode-right.html?correctOnes=${correctOnes}`;
                } else {
                    console.log(item.is_true);
                    console.log(`Try again! The product ${item.title} does not exist!`); 
                    window.location.href= `http://localhost:${port}/light-mode-false.html?correctOnes=${correctOnes}`; 
                }
            }
        }
        if (btnFalse) {
            btnFalse.onclick = () => {
                if (item.is_true === false) {
                    correctOnes++;
                    console.log(item.is_true);
                    console.log(`Good boy! ${item.title} is a non-existent product`);   
                    window.location.href= `http://localhost:${port}/light-mode-right.html?correctOnes=${correctOnes}`;
                } else {
                    console.log(item.is_true);
                    console.log(`Try again! ${item.title} exists!`);
                    window.location.href= `http://localhost:${port}/light-mode-false.html?correctOnes=${correctOnes}`;
                }
            }
        }

    } catch(error) {
        console.log(error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    formQuestion();
})

