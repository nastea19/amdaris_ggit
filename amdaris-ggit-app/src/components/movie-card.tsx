import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface MovieCardProps {
  title: string;
  subheader: string;
  image: string;
  alt: string;
  description: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  subheader,
  image,
  alt,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} subheader={subheader} />
      <CardMedia component="img" image={image} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
