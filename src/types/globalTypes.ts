import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "../store/store";
import { CommentSection } from "./commentSectionTypes";
import { CurrentVideo } from "./currentVideo/currentVideoTypes";
import { SearchResults } from "./searchResultsType";
import { Header, Theme } from "./themeAndHeaderTypes";
import { YoutubeVideos } from "./youtubeVideosTypes";
import { VideoCategoryChip } from "./videoCategoryChipTypes";

export type GlobalState = {
  theme: Theme;
  header: Header;
  youtubeVideos: YoutubeVideos;
  currentVideo: CurrentVideo;
  searchResults: SearchResults;
  commentSection: CommentSection;
  videoCategory: VideoCategoryChip;
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
