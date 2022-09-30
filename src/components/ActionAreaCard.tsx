import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface ActionAreaCardProps {
  animal: string;
  image: string;
  description: string;
}

export default function ActionAreaCard({
  animal,
  image,
  description,
}: ActionAreaCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "block",
        width: { xs: "flex", sm: "300px" },
        color: '#393E46'
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            height: { xs: "flex", sm: "280px" },
          }}
          component="img"
          height="140"
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{animal}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
