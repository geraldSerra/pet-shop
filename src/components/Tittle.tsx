import { Box, CardActions, CardMedia, Stack, Typography } from "@mui/material";

interface SectionTittleProps {
    tittle: string;
    color: string;
  }

 const Tittle = ({
    tittle,
    color,
  }: SectionTittleProps) => {
return(
    <Typography
        variant="h2"
        fontFamily="roboto"
        textAlign="left"
        sx={{ color: {color}, py: 4, pl: 6}}
      >
        <strong>{tittle}</strong>
      </Typography>
)
}

export default Tittle;