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
  li.className = 'item d-flex d-col center';
  li.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.image.original}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text"> <a class="linkIcon"><i class="far fa-heart"></i></a></p>
      <input class="comment-btn" type="button" value="Comments" />;
  </div>
</div>`;

  list.appendChild(li);
};

window.addEventListener('load', () => {
  for (let i = 1; i < 7; i += 1) {
    const temp = makeShowUrl(i);
    makeElementsForShow(temp);
    // putShowInside(temp, i);
  }
});
