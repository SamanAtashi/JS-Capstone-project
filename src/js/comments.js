import makeShowUrl from '.';

const sendComment = async (newData) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    }
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
  const movie = await makeShowUrl(li.id);
  popDiv.innerHTML = `
     <div class="w-100 container">
         <i class="cancel-pop fa fa-times"></i>
        <div class="w-75 container d-flex justify-content-center align-items-center flex-column">
          <div class="pop-img"><img class="w-100 h-100" src="${movie.image.original}" alt="popUp" /></div>
          <div class="pop-info d-flex flex-columm">
            <div class="d-flex justify-content-between">
              <div>
              <span>Genres</span>
                <ul>

                </ul>
              </div>
              <div></div>
            </div>
            <div class="d-flex justify-content-between"> </div>
          </div>

         <form >
         <h2 classs="">Add a comment<h2>
             <input type="text" class="form-control input-name" placeholder="Your Name">
             <textarea class="form-control input-comment" placeholder=" Your Comment"> </textarea>
            <button type="submit" class="btn btn-primary">Comment</button>
         </form>
        </div>
    </div> `;

  const main = document.querySelector('main');
  const cancelPop = popDiv.querySelector('.cancel-pop');
  const form = popDiv.querySelector('form');
  submitComment(list.id, form);
  main.appendChild(popDiv);
  cancelPop.addEventListener('click', () => {
    main.removeChild(popDiv);
  });
};

export default popUp;
