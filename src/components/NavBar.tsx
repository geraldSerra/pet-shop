import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/system";
import Drawer from "@mui/material/Drawer";

import { useScrollPosition } from "../hooks/useScrollPosition";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";
import DrawerPage from "./DrawerPage";

const pages = ["Products", "Pricing", "Help a homeless dog"];
const settings = ["Profile", "Account", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);

  interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

  const ScrollDown = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <>
      <AppBar
        id="AppBar"
        position="fixed"
        color="transparent"
        sx={
          useScrollPosition() < 60
            ? {
                // bgcolor: '#43C6AC',
                width: "100%",
                height: { sm: 100 },
                color: "white",
                fontFamily: "roboto",
                textTransform: "none",
                justifyContent: "center",
                zindex: "1",
                bgcolor: "rgb(255, 46, 99, 1)",
                backgroundAttachment: "fixed",
                transition: "0.2s",
                px: 10,
              }
            : {
                // bgcolor: '#43C6AC',
                width: "100%",
                height: { sm: 80 },
                color: "#867979",
                fontFamily: "roboto",
                textTransform: "none",
                justifyContent: "center",
                zindex: "1",
                bgcolor: "white",
                backgroundAttachment: "fixed",
                transition: "0.3s",
                px: 4,
              }
        }
      >
        {/* Container */}
        <Box sx={{ display: "flex", mx: "auto", width: "100%" }}>
          <Toolbar
            disableGutters
            sx={{ mx: 0, justifyContent: "space-between", width: "100%" }}
          >
            <Logo />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                flexGrow: 1,
                justifyContent: "left",
                mx: 10,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: 2,
                    color: "inherit",
                    display: "block",
                    textTransform: "inherit",
                    fontSize: "15px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "inherit",
                flexGrow: 1,
                justifyContent: "right",
                mx: 0,
              }}
            >
              <IconButton
                aria-label="Cart"
                onClick={() => {
                  setOpen(true);
                }}
                sx={{ color: "inherit" }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton aria-label="Change mode" sx={{ color: "inherit" }}>
                <LightModeOutlinedIcon />
              </IconButton>
            </Stack>
            <Box
              sx={{
                display: "block",
                px: 3,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-10.png"
                    sx={{ width: 60, height: 60 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            width: { xs: "flex", sm: "30%" },
            height: { xs: "55%", sm: "85%" },
            px: 4,
            py: 9,
          },
        }}
        open={open}
        anchor="right"
        onClose={() => {
          setOpen(false);
        }}
      ></Drawer>
    </>
  );
};

export default NavBar;
