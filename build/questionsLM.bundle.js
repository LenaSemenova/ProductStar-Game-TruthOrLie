(()=>{"use strict";const t=document.querySelector(".dm-q-product-name"),e=document.querySelector(".dm-q-product-pic"),o=document.querySelector(".dm-q-product-description"),n=(document.querySelector(".dm-q-current-question"),document.querySelector(".dm-q-btn-true")),r=document.querySelector(".dm-q-btn-false"),c=window.location.href.split(":")[2].split("/")[0],i=new URLSearchParams(window.location.search).get("correctOnesBack");let s,a=0;function l(){return Math.floor(20*Math.random()+1)}async function h(t){const e=await new Promise(((t,e)=>{fetch("http://127.0.0.1:8000/questions/api/used/").then((t=>{if(200===t.status)return t.json();throw new Error})).then((e=>{t(e)})).catch((t=>{e(`We have an error: ${t}.`)}))}));let o=[];for(let t=0;t<e.length;t++)o.push(e[t].question_id);return o.includes(t)}i>a&&(a=i),window.addEventListener("DOMContentLoaded",(()=>{!async function(){try{const i=await async function(){let t={question_id:""};const e=await async function(){let t=l();for(;await h(t);)t=l();return t}();return t.question_id=e,(await async function(t){return await fetch("http://127.0.0.1:8000/questions/api/used/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(t)).status,new Promise(((t,o)=>{fetch(`http://127.0.0.1:8000/questions/api/${e}/`).then((t=>{if(200===t.status)return t.json();throw new Error})).then((e=>{t(e)})).catch((t=>{o(`We have an error: ${t}.`)}))}))}();s=i,t.textContent=s.title,e.src=s.image,e.alt=s.title,o.textContent=s.question,n&&(n.onclick=()=>{!0===s.is_true?(a++,window.location.href=`http://localhost:${c}/light-mode-right.html?correctOnes=${a}`):window.location.href=`http://localhost:${c}/light-mode-false.html?correctOnes=${a}`}),r&&(r.onclick=()=>{!1===s.is_true?(a++,window.location.href=`http://localhost:${c}/light-mode-right.html?correctOnes=${a}`):window.location.href=`http://localhost:${c}/light-mode-false.html?correctOnes=${a}`})}catch(t){console.log(t)}}()}))})();