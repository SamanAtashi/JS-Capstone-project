import '../sass/style.scss';
import { addLike, getLike, showLikesInDOM } from './likes';

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
  document.querySelector('#list').innerHTML += `<li class="item"><img class="img">
            <div class="title d-flex center">
                <h2 class="name"></h2>
                <a class="likes">
                    <i class="far fa-heart"></i>
                </a>
                <p class="likesNum">0</p>
            </div>
            <input type="button" value="Comments">
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
  imgElements[num - 1].setAttribute('src', tempImg);
  titleElements[num - 1].innerHTML = tempName;
};

window.addEventListener('load', () => {
  for (let i = 1; i < 7; i += 1) {
    // getting show URL + all details inside it
    const temp = makeShowUrl(i);
    // populate the DOM
    makeElementsForShow();
    // add image and name to DOM
    putShowInside(temp, i);
  }
  // retrieve Likes and show on DOM
  const likesList = getLike();
  showLikesInDOM(likesList);
  // adding likes (posting likes)
  document.querySelectorAll('.likes').forEach((like) => {
    like.addEventListener('click', () => {
      const itemName = like.parentElement.querySelector('h2').innerHTML;
      addLike(itemName);
    });
  });
});
