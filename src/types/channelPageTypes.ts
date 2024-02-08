export type ChannelPage = {
  channelHeader: ChannelPageHeader;
  channelVideos: ChannelPageVideos[];
  loading: boolean;
  error: unknown;
};

export type ChannelPageHeader = {
  channelLogo: string;
  channelTitle: string;
  channelDescription: string;
  channelTotalVideos: string;
  channelTotalSubscribers: string;
};

export type ChannelPageVideos = {
  videoId: string;
  videoThubnail: string;
  videoTitle: string;
  videoViews: string;
  videoPostedDate: string;
};
