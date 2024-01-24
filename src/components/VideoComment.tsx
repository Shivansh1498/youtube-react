import { Avatar, Box, Stack, Typography } from "@mui/material";

type Comment = {
  authorAvatar: string;
  authorName: string;
  authorComment: string;
};

const VideoComment = ({ authorAvatar, authorName, authorComment }: Comment) => {
  return (
    <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
      <Avatar alt={authorName} src={authorAvatar} />
      <Box>
        <Typography variant="body1">{authorName}</Typography>
        <Typography variant="body2">{authorComment}</Typography>
      </Box>
    </Stack>
  );
};

export default VideoComment;
