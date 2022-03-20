import axios from "axios";

const isDev = process && process.env.NODE_ENV === "development";

export const api = axios.create({
  baseURL: isDev
    ? "http://localhost:3000/api/"
    : "https://hookpedia.vercel.app/api/",
});
