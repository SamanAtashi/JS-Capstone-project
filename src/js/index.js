import '../sass/style.scss';
import { createForm } from './comments';

// todo:-----------> Get data from API

const baseUrl = 'https://api.tvmaze.com/shows/';

const makeShowUrl = async (id) => {
  const temp = fetch(`${baseUrl}${id}`);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
};

// todo:-----------> Show them on HTML (name + image)

const makeElementsForShow = () => {
  document.querySelector('#list').innerHTML += `
  <li class="item">
    <img class="img" />
    <div class="title d-flex center">
    <h2 class="name"></h2>
    <a class="linkIcon"><i class="far fa-heart"></i></a>
    </div>
  <input type="button" class="comment" value="Comments" />
</li>`;
};

const putShowInside = async (show, num) => {
  // bring them in
  const temp = await show;
  const tempImg = temp.image.original;
  const tempName = temp.name;

  // put it inside
  const imgElements = document.querySelectorAll('.img');
  const titleElements = document.querySelectorAll('.name');
  const li = document.querySelectorAll('.item');

  imgElements[num - 1].setAttribute('src', tempImg);
  titleElements[num - 1].innerHTML = tempName;
  li[num - 1].id = temp.id;
};

window.addEventListener('load', () => {
  for (let i = 1; i < 7; i += 1) {
    const temp = makeShowUrl(i);
    makeElementsForShow();
    putShowInside(temp, i);
  }

  const commentsBtn = document.querySelectorAll('.comment');
  commentsBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const li = element.parentElement;
      createForm(li);
    });
  });
});
