import msx from "../../../lib/Musixmatch/Msx";
const axios = require("axios");

var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "http://www.example.com/callback",
});

const options = {
  method: "GET",
  url: "https://theaudiodb.p.rapidapi.com/searchtrack.php",
  params: { s: "coldplay", t: "yellow" },
  headers: {
    "X-RapidAPI-Key": "d8acc969c2msh1e4d9791dc77c63p1660b0jsnba7ad1457fb1",
    "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
  },
};

export default async (req, res) => {
  try {
    // let data = await msx.chartArtists({ country: "us", page: 1, page_size: 3 });
    // console.log(data);
    // let artist = await msx.artist({ artist_id: 118 });

    // let music = await msx.chartTracks({
    //   page: 1,
    //   page_size: 3,
    //   country: "us",
    //   f_has_lyrics: 1,
    // });

    //rapid api
    // let data = await axios.request(options);

    let data = spotifyApi.getAlbum("5U4W9E5WsYb2jUQWePT8Xm");

    // res.status(200).json({ name: "John Doe", music, artist, data });
    res.status(200).json({ name: "John Doe", data });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(200).json({ msg: "Something went wrong" });
  }
};
