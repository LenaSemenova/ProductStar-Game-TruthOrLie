(()=>{"use strict";const e=document.querySelector("#dm-form-game-signup-form");async function t(e){e.preventDefault();let t={name:"",email:"",phone:"",agreement:!1};const n=(a=e.target,new FormData(a));var a;const o=Array.from(n.entries());t.name=o[0][1],t.phone=o[1][1],t.email=o[2][1],"1"===o[3][1]&&(t.agreement=!0);const r=await async function(e){return await fetch("http://127.0.0.1:8000/users/api/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(t);201===r.status&&(window.location.href="./dark-mode-questions.html")}window.addEventListener("DOMContentLoaded",(()=>{e&&e.addEventListener("submit",t)}))})();