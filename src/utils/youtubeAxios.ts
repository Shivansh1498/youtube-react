import axios, { AxiosInstance } from "axios";

const youtubeAxios: AxiosInstance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
});

export default youtubeAxios;
