(()=>{"use strict";const a=async a=>{const t=fetch(`https://api.tvmaze.com/shows/${a}`);return(await t).json()},t=async a=>{const t=await a,e=document.querySelector("#list"),n=document.createElement("li");n.className="item d-flex d-col center",n.innerHTML=`\n  <div class="card" style="width: 18rem;">\n  <img class="card-img-top" src="${t.image.original}" alt="Card image cap">\n  <div class="card-body">\n    <h5 class="card-title">${t.name}</h5>\n    <p class="card-text"> <a class="linkIcon"><i class="far fa-heart"></i></a></p>\n      <input class="comment-btn" type="button" value="Comments" />;\n  </div>\n</div>`,e.appendChild(n)};window.addEventListener("load",(()=>{for(let e=1;e<7;e+=1){const n=a(e);t(n)}}))})();