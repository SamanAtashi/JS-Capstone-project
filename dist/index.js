(()=>{"use strict";const e="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/likes",n=async e=>{const n=fetch(`https://api.tvmaze.com/shows/${e}`);return(await n).json()},t=async e=>{const t=document.createElement("section");t.className="popUp";const s=await n(e.id),a=await(async e=>{const n=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/comments?item_id=${e}`);return await n.text()})(e.id),c=JSON.parse(a),i=(e=>e.length)(c),o=c[i-1];console.log(o),t.innerHTML=`\n     <div class="w-100 container">\n         <i class="cancel-pop fa fa-times"></i>\n        <div class="w-100 container d-flex justify-content-center align-items-center flex-column">\n          <div class="pop-summary d-flex justify-content-between w-100">\n             <div class="pop-img pr-5">\n              <img class="w-100 h-100" src="${s.image.original}" />\n            </div>\n          <div class="sam-p">\n          <h6>Summary: </h6>\n            ${s.summary}\n          </div>\n\n          </div>\n          <div class="pop-info py-3 d-flex  w-100 flex-column">\n            <h2 class="mx-auto">${s.name}</h2>\n            <div class="d-flex w-100 justify-content-between">\n              <div>\n              <span>Genres :   ${s.genres.map((e=>`<span>${e}</span>`)).join(", ")}</span>              \n              </div>\n              <div>language: ${s.language}</div>\n            </div>\n            <div class="d-flex justify-content-between">\n                <div>\n                  Schedule : ${s.schedule.days}, ${s.schedule.time} \n                </div>\n                <div>\n                  TV: ${s.network.name}, ${s.network.country.name}\n                </div>\n            </div>\n          </div>\n\n          <div class="all-comments">\n                <span>Comments</span> \n                <span class="text-secondery mx-2" ><i class="fa fa-comments" ></i></span> \n                <span class="commentN text-white">${i}</span>\n                <p class="last-com font-italic">Last comment: ${o.creation_date} </p>\n                \n          </div>\n\n         <form class="w-100 d-flex flex-column align-items-center">\n         <h2 classs="">Add a comment</h2>\n             <input type="text" class="input-name" placeholder="Your Name">\n             <textarea name="comment" class="input-comment" placeholder="Your Comment"></textarea>\n            <button type="submit" class="btn btn-primary"> \n              <i class="fa fa-comments" ></i> Comment \n            </button>\n         </form>\n        </div>\n    </div> `;const l=document.querySelector("main"),r=t.querySelector(".cancel-pop"),m=t.querySelector("form");((e,n)=>{n.addEventListener("submit",(n=>{const t=document.querySelector(".input-name"),s=document.querySelector(".input-comment"),a=document.querySelector(".commentN"),c=parseInt(a.innerHTML)+1;a.innerHTML=c,console.log(c);const i={item_id:e,username:t.value,comment:s.value};n.preventDefault(),(async e=>{(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).text()})(i)}))})(e.id,m),l.appendChild(t),r.addEventListener("click",(()=>{l.removeChild(t),l.parentElement.parentElement.classList.remove("pop-html")}))},s=[],a=async(e,n)=>{const t=await e,s=t.image.original,a=t.name,c=document.querySelectorAll(".img"),i=document.querySelectorAll(".name"),o=document.querySelectorAll(".hour"),l=document.querySelectorAll(".time"),r=document.querySelectorAll(".description"),m=document.querySelectorAll(".item");c[n-1].setAttribute("src",s),i[n-1].innerHTML=a,m[n-1].id=t.id,o[n-1].innerHTML=t.schedule.time,l[n-1].innerHTML=`${t.schedule.days[0]} ${t.premiered}`,r[n-1].innerHTML+=t.summary};window.addEventListener("load",(()=>{for(let e=1;e<7;e+=1){const t=n(e);document.querySelector("#list").innerHTML+='<li class="item"><img class="img">\n            <div class="title pr-3 py-3 d-flex justify-content-start">\n                <h2 class="name"></h2>\n                <a class="likes ml-auto">\n                    <i class="fa fa-heart-o"></i>\n                </a>\n                <p class="likesNum pl-2">0</p>\n            </div>\n            <button type="button" class="comment"> \n              <i class="fa fa-comments" ></i> Comments \n            </button>\n            <div class="addition-info d-flex px-3 py-2">\n             <span>\n              <i class="add-icon fa fa-clock-o" aria-hidden="true"></i> \n              <span class="hour"></span>\n             </span>\n             <span class="time ml-auto"></span>\n              </div>\n              <div class="description">\n                <h6>Sumary:</h6>\n              </div>\n\n        </li>',a(t,e),s.push(t)}s.length,(async e=>{const n=await e,t=document.querySelectorAll(".name");n.forEach((e=>{t.forEach((n=>{e.item_id===n.innerHTML&&(n.parentElement.querySelector("p").innerHTML=e.likes)}))}))})((async()=>{const n=fetch(e);return(await n).json()})()),document.querySelectorAll(".likes").forEach((n=>{n.addEventListener("click",(()=>{const t=n.parentElement.querySelector("h2").innerHTML;n.querySelector("i").classList.remove("fa-heart-o"),n.querySelector("i").classList.add("fa-heart"),(async n=>{const t=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})});(function(e){document.querySelectorAll(".name").forEach((n=>{if(n.innerHTML===e){const e=n.parentElement.querySelector("p");let t=parseInt(e.innerHTML,10);t+=1,e.innerHTML=t}}))})(n),(await t).json()})(t)}))})),document.querySelectorAll(".comment").forEach((e=>{e.addEventListener("click",(()=>{const n=e.parentElement;t(n),document.querySelector("html").classList.add("pop-html")}))}))}))})();