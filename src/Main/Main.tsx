import ActionAreaCard from "../components/ActionAreaCard";
import NavBar from "../components/NavBar";
import { Box, Stack, Typography } from "@mui/material";

import CookieIcon from "@mui/icons-material/Cookie";
import WeekendIcon from "@mui/icons-material/Weekend";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Products from "../components/Products";
import Footer from "../components/Footer";
import CareTips from "../components/CareTips";
import SectionTittle from "../components/Tittle";
import Tittle from "../components/Tittle";
import FrontPage from "../components/FrontPage";
import DrawerPage from "../components/DrawerPage";

const Main = () => {
  return (
    <>
      <Box sx={{ width: "100%", m: 0 }}>
        <NavBar />
        <FrontPage />
        <Box
          sx={{
            display: "block",
            bgcolor: "#0F3460",
            height: "90vh",
            width: "100%",
          }}
        >
          <Tittle tittle="Products" color="#FFFFFF" />
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            px={2}
          >
            <Products
              title="Food"
              icon={<CookieIcon sx={{ fontSize: "120px" }} />}
              description=""
            />
            <Products
              title="Accessories"
              icon={<PestControlRodentIcon sx={{ fontSize: "120px" }} />}
              description=""
            />
            <Products
              title="Furnitures"
              icon={<WeekendIcon sx={{ fontSize: "120px" }} />}
              description=""
            />
            <Products
              title="Care"
              icon={<VaccinesIcon sx={{ fontSize: "120px" }} />}
              description=""
            />
          </Stack>
        </Box>
        <Box
          sx={{
            display: "block",
            bgcolor: "#FF2E63",
            height: "90vh",
            width: "100%",
            p: 0,
          }}
        >
          <SectionTittle tittle="Choose your new Pet!" color="#FFFFFF" />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            px={2}
          >
            {" "}
            <ActionAreaCard
              animal="Birds"
              image="https://us.123rf.com/450wm/zolotonsmailru/zolotonsmailru2204/zolotonsmailru220400415/184808169-dise%C3%B1o-plano-de-loro-guacamayo-aislado-vector.jpg?ver=6"
              description="Será muy gracioso cuando repita todo lo que digas"
            />
            <ActionAreaCard
              animal="Dogs"
              image="https://media.istockphoto.com/vectors/cute-husky-vector-id1359930955?b=1&k=20&m=1359930955&s=612x612&w=0&h=gGYb2pe26XbMwUaI4xM3Px8dDk5gboljsZ7nP3eOqSc="
              description="Más que comprobado a través de los años, el mejor amigo del hombre"
            />
            <ActionAreaCard
              animal="Cats"
              image="https://img.freepik.com/free-vector/cat-elegant-tie_71593-692.jpg?t=st=1645785653~exp=1645786253~hmac=e039036685f165f819d1eba64f676fb4530356862aa3b7f4f65abc1b9068c98a"
              description="Reservados, pero divertidos en el momento que quieren serlo"
            />
            <ActionAreaCard
              animal="Fishes"
              image="https://static.vecteezy.com/system/resources/previews/002/453/219/large_2x/cute-blue-fish-free-vector.jpg"
              description="Perfectos para adornar ese rincon de la casa"
            />
          </Stack>
        </Box>
        <CareTips />
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Main;
