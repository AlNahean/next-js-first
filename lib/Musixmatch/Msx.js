const Musixmatch = require("musixmatch");
const init = {
  // Required from Musixmatch.com
  apikey: "5186b58f0da7a5ac83118c15564fb3bf",

  // Optional default 'https://api.musixmatch.com/ws/1.1/'
  // baseURL will be prepended to `url` unless `url` is absolute.
  baseURL: "https://api.musixmatch.com/ws/1.1/",

  // Optional if you have problem with CORS, default is 'https://cors-anywhere.herokuapp.com/'
  // if you want remove prefix CORS url set value tobe ''
  // corsURL: '<Your cors url>',

  // Optional default is 'Json'
  format: "json",

  // More Optional Fetches API request
  options: {
    // `headers` are custom headers to be sent
    headers: { "X-Requested-With": "XMLHttpRequest" },
  },
};
const msx = Musixmatch(init);

export default msx;
