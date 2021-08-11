const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/likes';

function updateLikeForDOM(name) {
  const itemNames = document.querySelectorAll('.name');

  itemNames.forEach((item) => {
    if (item.innerHTML === name) {
      let tempNum = parseInt(item.nextSibling.nextSibling.innerHTML, 10);
      tempNum += 1;
      item.nextSibling.nextSibling.innerHTML = tempNum;
    }
  });
}

export const addLike = async (name) => {
  const postingLike = fetch(likeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: name,
    }),
  });

  updateLikeForDOM(name);

  return postingLike.JSON();
};
