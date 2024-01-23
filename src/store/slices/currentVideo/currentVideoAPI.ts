import youtubeAxios from "../../../utils/youtubeAxios";

export const currentVideoChannelInfo = async (channelId: string) => {
  try {
    const { data } = await youtubeAxios.get(
      `/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const currentVideoDetail = async (currentVideoId: string) => {
  try {
    const { data } = await youtubeAxios.get(
      `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${currentVideoId}&regionCode=IN&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    return data.items?.[0];
  } catch (error) {
    console.log(error);
  }
};
