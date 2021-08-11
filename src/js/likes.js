const likeUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0tY3ZECsTgObPiElFJSy/likes';

function updateLikeForDOM(name) {
  const itemNames = document.querySelectorAll('.name');

  itemNames.forEach((item) => {
    if (item.innerHTML === name) {
      const num = item.parentElement.querySelector('p');
      let tempNum = parseInt(num.innerHTML, 10);
      tempNum += 1;
      num.innerHTML = tempNum;
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
};

export const getLike = async () => {
  const temp = fetch(likeUrl);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
};

export const showLikesInDOM = async (listLikes) => {
  const list = await listLikes;

  const likesName = document.querySelectorAll('.name');

  list.forEach((item) => {
    likesName.forEach((name) => {
      if (item.item_id === name.innerHTML) {
        const select = name.parentElement.querySelector('p');
        select.innerHTML = item.likes;
      }
    });
  });
};
