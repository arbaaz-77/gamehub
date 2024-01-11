import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c83f1d0a6e0947219d9fabcd50eff589",
  },
});
