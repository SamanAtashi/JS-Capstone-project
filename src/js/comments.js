export const createForm = (list) => {
  const form = document.createElement('form');
  form.innerHTML = `
  <form>
    <input type="text" class="form-control input-name" placeholder="Your Name">
    <input type="text" class="form-control input-comment" placeholder=" Your Comment">
    <button type="submit" class="btn btn-primary">Submit</button>
</form>;`;
  list.appendChild(form);
  submitComment('item1Anderson', form);
};

const comment = async (newData) => {
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

export const submitComment = (id, form) => {
  form.addEventListener('submit', (e) => {
    const inputName = document.querySelector('.input-name');
    const inputComment = document.querySelector('.input-comment');
    const newComment = {
      item_id: id,
      username: inputName.value,
      comment: inputComment.value,
    };
    e.preventDefault();
    comment(newComment);
  });
};
export default comment;
