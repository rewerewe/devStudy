import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4d19206ceb3ea471471a67257e87619a",
    language: "en-US",
  },
});

api.get("tv/popular");

export default api;
