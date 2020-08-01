import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID DFSfc0D-dooXWFS3Eo3r71444Gag1jZmIpL5uTeudlU",
  },
});
