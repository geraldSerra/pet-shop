import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

interface ProductsProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function Products({ title, icon, description }: ProductsProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "block",
        bgcolor: "rgba(255,255,255,0.2)",
        width: { xs: "flex", sm: "200px" },
      }}
    >
      <CardActionArea>
        <Box sx={{ py: 3, width: "100%", textAlign: "center", color: "white" }}>
          {icon}
        </Box>
        <CardContent>
          <Typography
            sx={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="roboto"
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites" sx={{ color: "white" }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" sx={{ color: "white" }}>
          <ShoppingCartRoundedIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
}
