// Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(51, 51, 51, 0.5)', // Fondo gris oscuro con opacidad de 0.8
        color: '#b0aeae',
        textAlign: 'center',
        padding: '4px', // Aumenta el padding para hacerlo más espacioso
        position: 'fixed',
        bottom: 0,
        left: 0,  // Asegúrate de que ocupe todo el ancho
        right: 0, // También aseguramos que ocupe el 100% del ancho
        width: '100%',  // Esto garantiza que el footer ocupe todo el ancho de la pantalla
        boxSizing: 'border-box', // Asegura que el padding no afecte el ancho total
      }}
    >
      <Typography variant="body2">
        © 2024 Apuestas F1. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
