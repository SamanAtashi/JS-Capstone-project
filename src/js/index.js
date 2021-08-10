import '../sass/style.scss';

// todo:-----------> Get data from API

const baseUrl = 'https://api.tvmaze.com/shows/';

const makeShowUrl = async (id) => {
  const temp = fetch(`${baseUrl}${id}`);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
};

// todo:-----------> Show them on HTML (name + image)

const makeElementsForShow = async (Promisedata) => {
  const data = await Promisedata;
  const list = document.querySelector('#list');
  const li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `
  <img class="img" src="${data.image.original}" />
  <div class="title d-flex center">
    <h2 class="name">${data.name}</h2>
    <a class="linkIcon"><i class="far fa-heart"></i></a>
  </div>
  <input type="button" value="Comments" />`;
  list.appendChild(li);
};

window.addEventListener('load', () => {
  for (let i = 1; i < 7; i += 1) {
    const temp = makeShowUrl(i);
    makeElementsForShow(temp);
    // putShowInside(temp, i);
  }
});
