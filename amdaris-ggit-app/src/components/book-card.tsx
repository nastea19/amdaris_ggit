import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface BookCardProps {
  title: string;
  subheader: string;
  image: string;
  alt: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  subheader,
  image,
  alt,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} subheader={subheader} />
      <CardMedia component="img" height="194" image={image} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;