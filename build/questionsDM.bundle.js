(()=>{"use strict";const t=document.querySelector(".dm-q-product-name"),e=document.querySelector(".dm-q-product-pic"),o=document.querySelector(".dm-q-product-description"),n=(document.querySelector(".dm-q-current-question"),document.querySelector(".dm-q-btn-true")),r=document.querySelector(".dm-q-btn-false"),c=window.location.href.split(":")[2].split("/")[0],i=new URLSearchParams(window.location.search).get("correctOnesBack");let a,s=0;function u(){return Math.floor(20*Math.random()+1)}async function d(t){const e=await new Promise(((t,e)=>{fetch("http://127.0.0.1:8000/questions/api/used/").then((t=>{if(200===t.status)return t.json();throw new Error})).then((e=>{t(e)})).catch((t=>{e(`We have an error: ${t}.`)}))}));let o=[];for(let t=0;t<e.length;t++)o.push(e[t].question_id);return o.includes(t)}i>s&&(s=i),window.addEventListener("DOMContentLoaded",(()=>{!async function(){try{const i=await async function(){let t={question_id:""};const e=await async function(){let t=u();for(;await d(t);)t=u();return t}();return t.question_id=e,(await async function(t){return await fetch("http://127.0.0.1:8000/questions/api/used/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(t)).status,new Promise(((t,o)=>{fetch(`http://127.0.0.1:8000/questions/api/${e}/`).then((t=>{if(200===t.status)return t.json();throw new Error})).then((e=>{t(e)})).catch((t=>{o(`We have an error: ${t}.`)}))}))}();a=i,t.textContent=a.title,e.src=a.image,e.alt=a.title,o.textContent=a.question,n&&(n.onclick=()=>{!0===a.is_true?(s++,window.location.href=`http://localhost:${c}/dark-mode-right.html?correctOnes=${s}`):window.location.href=`http://localhost:${c}/dark-mode-false.html?correctOnes=${s}`}),r&&(r.onclick=()=>{!1===a.is_true?(s++,window.location.href=`http://localhost:${c}/dark-mode-right.html?correctOnes=${s}`):window.location.href=`http://localhost:${c}/dark-mode-false.html?correctOnes=${s}`})}catch(t){console.log(t)}}()}))})();