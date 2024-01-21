import axios from "axios";
import youtubeAxios from "../../../utils/youtubeAxios";

export const mostPopularVideos = async () => {
  try {
    const { data } = await youtubeAxios.get(
      `/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchVideos = async (queryString: string) => {
  try {
    const { data } = await youtubeAxios.get(
      `/search?part=snippet&maxResults=10&q=${queryString}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const relatedVideos = async (currentVideoId: string) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${currentVideoId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
