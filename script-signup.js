//For stylesheets
import "./style-dm-signup.css"

//For successful functioning of the sign-up-form

const signupForm = document.querySelector("#dm-form-game-signup-form");

function serializeForm(formNode) {
    const data = new FormData(formNode);
    return data;
}

async function sendData(data) {
    return await fetch('http://127.0.0.1:8000/users/api/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
}

async function handleFormSubmit (event) {
    event.preventDefault();
    let user = {
        name: "",
        email: "",
        phone: "",
        agreement: false
    }
    const data = serializeForm(event.target);
    const arrData = Array.from(data.entries());
    user.name = arrData[0][1];
    user.phone = arrData[1][1];
    user.email = arrData[2][1];
    if (arrData[3][1] === "1") {
        user.agreement = true;
    }
    
    const response = await sendData(user);
    if (response.status === 201) {
    window.location.href = "./dark-mode-questions.html";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    if (signupForm) {
    signupForm.addEventListener("submit", handleFormSubmit);
    }
});



