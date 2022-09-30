import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          columns={4}
          direction="column"
          spacing={0}
          display="flex"
        >
          <Grid
            container
            item
            direction="row"
            sx={{
              height: "200px",
              width: "100%",
              bgcolor: "#0F3460",
              color: "white",
              fontFamily: "roboto",
              textDecoration: "none",
              justifyContent: "space-between",
              alignContent: "center",
              px: 13,
            }}
          >
            <Grid item sx={{ my: 3 }}>
              <Logo />
            </Grid>
            <Grid item sx={{ justifyContent: "left" }}>
              <Grid container></Grid>
              <Typography
                variant="h6"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  alignContent: "center",
                  mb: 1,
                }}
              >
                Legal
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 450,
                  textDecoration: "inherit",
                  alignContent: "center",
                  mb: 1,
                }}
              >
                Privacy policy
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 450,
                  textDecoration: "inherit",
                  mb: 1,
                }}
              >
                Terms and conditions
              </Typography>
            </Grid>
            <Grid item sx={{ justifyContent: "left" }}>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  mb: 1,
                }}
              >
                Help
              </Typography>
              <Button
                variant="outlined"
                size="medium"
                color="success"
                startIcon={<WhatsAppIcon />}
                sx={{
                  borderRadius: 5,
                  fontFamily: "inherit",
                  justifyContent: "center",
                  alignContent: "center",
                  textTransform: "none",
                  color: "inherit",
                  mb: 1,
                }}
              >
                Send us a Whats!
              </Button>
              <Typography
                variant="body2"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 450,
                  textDecoration: "inherit",
                }}
              >
                petshop_help@gmail.com.not
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                textAlign="left"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  textDecoration: "inherit",
                  pb: 1,
                }}
              >
                Follow us!
              </Typography>
              <IconButton aria-label="Facebook" sx={{ color: "inherit" }}>
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ color: "inherit" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ color: "inherit" }}>
                <TwitterIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            item
            sx={{
              height: "80px",
              width: "100%",
              bgcolor: "#00ADB5",
              color: "white",
              fontFamily: "roboto",
              textDecoration: "none",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid item>
              <Typography
                variant="body2"
                textAlign="center"
                component="a"
                noWrap
                href=""
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "inherit",
                  fontFamily: "inherit",
                  fontWeight: 450,
                  textDecoration: "inherit",
                }}
              >
                © Copyright 2022. All rights reserved. forbidden the total or
                partial reproduction of the content of this site.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
