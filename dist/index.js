(()=>{"use strict";const e=async e=>{const t=fetch(`https://api.tvmaze.com/shows/${e}`);return(await t).json()},t=()=>{const e=document.createElement("li"),t=document.createElement("img"),n=document.createElement("div"),a=document.createElement("h2"),c=document.createElement("a"),s=document.createElement("i"),i=document.createElement("input");a.setAttribute("class","name"),c.setAttribute("class","linkIcon"),s.setAttribute("class","far fa-heart"),e.setAttribute("class","item"),t.setAttribute("class","img"),n.setAttribute("class","title d-flex center"),i.setAttribute("type","button"),i.setAttribute("value","Comments"),n.appendChild(a),c.appendChild(s),n.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(i),document.querySelector("#list").appendChild(e)},n=async(e,t)=>{const n=await e,a=n.image.original,c=n.name,s=document.querySelectorAll(".img"),i=document.querySelectorAll(".name");s[t-1].setAttribute("src",a),i[t-1].innerHTML=c};window.addEventListener("load",(()=>{for(let a=1;a<7;a+=1){const c=e(a);t(),n(c,a)}}))})();
