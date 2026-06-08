import axios from "axios";

const API_URL = `https://api.rawg.io/api/games`;

const API_KEY = `c7922203962643a2b66b8d623ae723ae`;

export const api = axios.create({
  baseURL: `${API_URL}?key=${API_KEY}`,
});


