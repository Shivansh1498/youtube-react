export interface CommentSection {
  comments: Comments;
  status: string;
  error: unknown;
}

export interface Comments {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  replies?: Replies;
}

export interface Snippet {
  channelId: string;
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet2;
}

export interface Snippet2 {
  channelId: string;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface AuthorChannelId {
  value: string;
}

export interface Replies {
  comments: Comment[];
}

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet3;
}

export interface Snippet3 {
  channelId: string;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  parentId: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId2;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface AuthorChannelId2 {
  value: string;
}
