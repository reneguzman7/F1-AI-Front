// src/components/F1Car.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface F1CarProps {
  name: string;
  team: string;
  year: number;
  imageUrl: string;
  topSpeed: number; // km/h
  horsepower: number; // HP
}

const F1Car: React.FC<F1CarProps> = ({ name, team, year, imageUrl, topSpeed, horsepower }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={`${name} car image`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} ({year})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Team: {team}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Top Speed: {topSpeed} km/h
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Horsepower: {horsepower} HP
        </Typography>
      </CardContent>
    </Card>
  );
};

export default F1Car;
