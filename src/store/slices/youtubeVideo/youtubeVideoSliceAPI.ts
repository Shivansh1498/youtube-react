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
