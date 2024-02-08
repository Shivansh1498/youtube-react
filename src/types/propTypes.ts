export interface SearchPageVideoCardProps {
  thumbnail: string;
  title: string;
  description: string;
  channelTitle: string;
  uplodedHowLongAgo: string;
  videoId: string;
  channelId: string;
}

export interface YoutubeVideoCardProps {
  imageUrl: string;
  title: string;
  channelName: string;
  isVerified: string;
  viewCount: number;
  timeAgo: string;
  videoId: string;
  videoLength: string;
}
