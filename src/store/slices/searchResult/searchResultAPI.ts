import youtubeAxios from "../../../utils/youtubeAxios";

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
