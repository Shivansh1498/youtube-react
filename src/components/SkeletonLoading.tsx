import { Container, Stack } from "@mui/material";
import { YoutubeLogo } from "../assets/svgs/YoutubeLogo";
import { useTheme } from "@mui/system";

const YoutubePageLoading = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={25}
        spacing={3}
      >
        <div style={{ fill: theme.palette.icon.fill }}>{YoutubeLogo}</div>
        <div className="loader">
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
        </div>
      </Stack>
    </Container>
  );
};

export default YoutubePageLoading;
