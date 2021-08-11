import '../sass/style.scss';
import { addLike, getLike, showLikesInDOM } from './likes';
import popUp from './comments';

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
  document.querySelector(
    '#list'
  ).innerHTML += `<li class="item"><img class="img">
            <div class="title pr-3 py-3 d-flex justify-content-start">
                <h2 class="name"></h2>
                <a class="likes ml-auto">
                    <i class="fa fa-heart-o"></i>
                </a>
                <p class="likesNum pl-2">0</p>
            </div>
            <button type="button" class="comment"> 
              <i class="fa fa-comments" aria-hidden="true"></i> Comments 
            </button>
            <div class="addition-info d-flex px-3 py-2">
             <span>
              <i class="fa fa-clock-o" aria-hidden="true"></i> 
              <span class="hour"></span>
             </span>
             <span class="time ml-auto"></span>
              </div>
              <div class="description">
                <h6>Sumary:</h6>
              </div>

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
  const hour = document.querySelectorAll('.hour');
  const date = document.querySelectorAll('.time');
  const description = document.querySelectorAll('.description');

  const li = document.querySelectorAll('.item');

  imgElements[num - 1].setAttribute('src', tempImg);
  titleElements[num - 1].innerHTML = tempName;
  li[num - 1].id = temp.id;
  hour[num - 1].innerHTML = temp.schedule.time;
  date[num - 1].innerHTML = `${temp.schedule.days[0]} ${temp.premiered}`;
  description[num - 1].innerHTML += temp.summary;
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
      like.querySelector('i').classList.remove('fa-heart-o');
      like.querySelector('i').classList.add('fa-heart');

      addLike(itemName);
    });
  });
  const commentsBtn = document.querySelectorAll('.comment');
  commentsBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const li = element.parentElement;
      popUp(li);
    });
  });
});
