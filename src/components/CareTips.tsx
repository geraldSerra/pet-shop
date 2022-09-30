import { Box, CardActions, CardMedia, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea } from "@mui/material";
import Tittle from "./Tittle";

const CareTips = () => {
  return (
    <Box
      className="CareTips"
      sx={{
        display: "block",
        bgcolor: "white",
        height: "90vh",
        width: "100%",
        p: 0,
        justifyContent: "right",
      }}
    >
      <Tittle tittle="CareTips" color="#0F3460" />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "right",
          mx: 0,
          px: 15,
        }}
      >
        <Card
          sx={{
            display: "flex",
            width: "420px",
            height: "315px",
            borderRadius: 8,
          }}
        >
          <CardMedia
            component="iframe"
            src="https://www.youtube.com/embed/VNBALAF3U5E"
            allow="autoPlay"
            sx={{ width: "420px", height: "315px", textAlign: "right" }}
          />
        </Card>
      </Stack>
    </Box>
  );
};

export default CareTips;
