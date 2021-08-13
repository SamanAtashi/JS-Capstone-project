import '../sass/style.scss';
import { addLike, getLike, showLikesInDOM } from './likes';
import popUp from './comments';
import makeShowUrl from './getShow';
import itemCounter from './itemCounter';

const itemsNum = [];

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
              <i class="fa fa-comments" ></i> Comments 
            </button>
            <div class="addition-info d-flex align-items-center mx-auto">
             <span>
              <i class="add-icon fa fa-clock-o" aria-hidden="true"></i> 
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
  const temp = await show;
  const tempImg = temp.image.original;
  const tempName = temp.name;

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
    const temp = makeShowUrl(i);
    makeElementsForShow();
    putShowInside(temp, i);
    itemsNum.push(temp);
  }

  itemCounter(itemsNum);
  const likesList = getLike();
  showLikesInDOM(likesList);
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
      document.querySelector('html').classList.add('pop-html');
    });
  });
});
