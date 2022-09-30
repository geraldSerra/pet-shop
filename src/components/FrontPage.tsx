import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Tittle from "./Tittle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { url } from "inspector";

const FrontPage = () => {
  return (
    <Box
      className="FrontPage"
      sx={{
        display: "block",
        bgcolor: "white",
        height: "95vh",
        width: "100%",
        p: 0,
        justifyContent: "right",
        backgroundImage: 'https://images.squarespace-cdn.com/content/v1/5cc1caea6d7fdd0001ffc54b/1559086686943-J6Q59WHLEVWEBX8XXQNF/HOME-Parallax+of+lots+of+pets-01.jpg?format=2500w'
      }}
    >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="end"
          spacing={0}
          sx={{
            height: "100%",
            alignContent: "bottom",
            color: "#41aea9",
          }}
        >
          <WorkspacePremiumIcon
            sx={{ color: "#FFC23C", fontSize: "120px", pb: 5 }}
          />
          <Box sx={{ pb: 4, m: 0 }}>
            <Typography
              variant="h2"
              fontFamily="roboto"
              textAlign="center"
              width="100%"
              sx={{ color: "#00ADB5" }}
            >
              <strong>The best place for them!</strong>
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              width="100%"
              sx={{ color: "#252A34" }}
            >
              <strong>Poducts for the care of your pets</strong>
            </Typography>
          </Box>
        </Stack>
    </Box>
  );
};

export default FrontPage;
