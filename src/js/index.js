import '../sass/style.scss';

// todo:-----------> Get data from API

const baseUrl = 'https://api.tvmaze.com/shows/';

async function makeShowUrl(id) {
  const temp = fetch(`${baseUrl}${id}`);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
}
