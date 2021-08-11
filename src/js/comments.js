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

const createForm = (list) => {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" class="form-control input-name" placeholder="Your Name">
    <input type="text" class="form-control input-comment" placeholder=" Your Comment">
    <button type="submit" class="btn btn-primary">Submit</button>`;
  list.appendChild(form);
  //   submitComment(list.id, form);
};

export const popUp = (list) => {
  const popDiv = document.createElement('div');
  const img = popDiv.querySelector('.img');
  popDiv.innerHTML = `
     <div class="w-100 container">
        <div class="w-75 container">
          <div class="pop-img"><img class="w-100" src="${img.src}" alt="popUp" /></div>
          <div class="pop-info"></div>
  <form action=""></form>

        </div>
      </div>
  
  `;
};

export default createForm;
