import { Stack, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Stack p={3} alignItems={"center"} mt={10}>
      <Typography variant="h3" component={"h3"}>
        404: Page Not Found
      </Typography>
      <Typography variant="body1" component={"p"}>
        This page isn't available. Sorry about that. Try searching for something
        else.
      </Typography>
    </Stack>
  );
};

export default ErrorPage;
