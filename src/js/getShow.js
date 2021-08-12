const baseUrl = 'https://api.tvmaze.com/shows/';

const makeShowUrl = async (id) => {
  const temp = fetch(`${baseUrl}${id}`);
  const temp1 = await temp;
  const temp2 = temp1.json();
  return temp2;
};

export default makeShowUrl;
