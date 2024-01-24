import axios from "axios";

export const fetchComments = async (videoId: string) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
