import '../sass/style.scss';

// todo:-----------> Get data from API

const baseUrl = 'https://api.tvmaze.com/shows/';

async function makeShowUrl(id) {
  const temp = fetch(`${baseUrl}${id}`);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
}

// todo:-----------> Show them on HTML (name + image)

function makeElementsForShow() {
  const createLi = document.createElement('li');
  const createImg = document.createElement('img');
  const createDiv = document.createElement('div');
  const createH2 = document.createElement('h2');
  const createLinkIcon = document.createElement('a');
  const createIcon = document.createElement('i');
  const createBtn = document.createElement('input');

  // add class and change some attributes ---
  createH2.setAttribute('class', 'name');
  createLinkIcon.setAttribute('class', 'linkIcon');
  createIcon.setAttribute('class', 'far fa-heart');
  createLi.setAttribute('class', 'item');
  createImg.setAttribute('class', 'img');
  createDiv.setAttribute('class', 'title d-flex center');
  createBtn.setAttribute('type', 'button');
  createBtn.setAttribute('value', 'Comments');

  // appending ----------------------
  createDiv.appendChild(createH2);
  createLinkIcon.appendChild(createIcon);
  createDiv.appendChild(createLinkIcon);
  createLi.appendChild(createImg);
  createLi.appendChild(createDiv);
  createLi.appendChild(createBtn);
  document.querySelector('#list').appendChild(createLi);
}

async function putShowInside(show, num) {
  // bring them in
  const temp = await show;
  const tempImg = temp.image.original;
  const tempName = temp.name;

  // put it inside
  const imgElements = document.querySelectorAll('.img');
  const titleElements = document.querySelectorAll('.name');
  imgElements[num - 1].setAttribute('src', tempImg);
  titleElements[num - 1].innerHTML = tempName;
}

window.addEventListener('load', () => {
  for (let i = 1; i < 7; i += 1) {
    const temp = makeShowUrl(i);
    makeElementsForShow();
    putShowInside(temp, i);
  }
});