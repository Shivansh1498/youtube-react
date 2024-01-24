export interface VideoState {
  video: YouTubeVideo | null;
  loading: boolean;
  error: unknown | null;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: {};
  projection: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}

export interface SidebarData {
  label: string;
  icon: JSX.Element;
}

export interface SidebarOpenStatus {
  isSidebarOpen: boolean;
}

export interface HomeVideoCard {
  imageUrl: string;
  title: string;
  channelName: string;
  isVerified: string;
  viewCount: number;
  timeAgo: string;
  videoId: string;
  videoLength: string;
}

export interface SearchPageVideoCardProps {
  thumbnail: string;
  title: string;
  description: string;
  channelTitle: string;
  noOfViews: string;
  uplodedHowLongAgo: string;
  isVerified: string;
  videoId: string;
}
