import axios from "axios";

const client_id = process.env.REACT_APP_TWITCH_KEY;

let api = axios.create({
  headers: {
    "Client-ID": client_id
  }
});

export default api;
