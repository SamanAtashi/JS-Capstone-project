import makeShowUrl from './getShow';

const sendComment = async (newData) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    },
  );
  return response.text();
};

const submitComment = (id, form) => {
  form.addEventListener('submit', (e) => {
    const inputName = document.querySelector('.input-name');
    const inputComment = document.querySelector('.input-comment');
    const newComment = {
      item_id: id,
      username: inputName.value,
      comment: inputComment.value,
    };
    e.preventDefault();
    sendComment(newComment);
  });
};

const popUp = async (li) => {
  const popDiv = document.createElement('section');
  popDiv.className = 'popUp';
  const movies = await makeShowUrl(li.id);
  popDiv.innerHTML = `
     <div class="w-100 container">
         <i class="cancel-pop fa fa-times"></i>
        <div class="w-100 container d-flex justify-content-center align-items-center flex-column">
          <div class="pop-summary d-flex justify-content-between w-100">
             <div class="pop-img pr-5">
              <img class="w-100 h-100" src="${movies.image.original}" />
            </div>
          <div class="sam-p">
          <h6>Summary: </h6>
            ${movies.summary}
          </div>

          </div>
          <div class="pop-info py-3 d-flex  w-100 flex-column">
          <h2 class="mx-auto">${movies.name}</h2>
            <div class="d-flex w-100 justify-content-between">
              <div>
              <span>Genres :   ${movies.genres
    .map((movie) => `<span>${movie}</span>`)
    .join(', ')}</span>              
              </div>
              <div>language: ${movies.language}</div>
            </div>
            <div class="d-flex justify-content-between">
                <div>
                  Schedule : ${movies.schedule.days}, ${movies.schedule.time} 
                </div>
                <div>
                  TV: ${movies.network.name}, ${movies.network.country.name}
                </div>
            </div>
          </div>

         <form class="w-100 d-flex flex-column align-items-center">
         <h2 classs="">Add a comment</h2>
             <input type="text" class="input-name" placeholder="Your Name">
             <textarea name="comment" class="input-comment" placeholder="Your Comment"></textarea>
            <button type="submit" class="btn btn-primary"> 
              <i class="fa fa-comments" ></i> Comment 
            </button>
         </form>
        </div>
    </div> `;

  const main = document.querySelector('main');
  const cancelPop = popDiv.querySelector('.cancel-pop');
  const form = popDiv.querySelector('form');
  submitComment(li.id, form);
  main.appendChild(popDiv);
  cancelPop.addEventListener('click', () => {
    main.removeChild(popDiv);
    main.parentElement.parentElement.classList.remove('pop-html');
  });
};

export default popUp;
