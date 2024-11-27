import React from 'react';
import { Box, Typography } from '@mui/material';
import f1Url from '../../public/assets/IG_LogoTicker_9_F1.webp'

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60px', // Altura fija del header
        backgroundColor: '#E10600', // Rojo para el fondo
        color: '#fff',
        display: 'flex',
        justifyContent: 'center', // Centrar el contenido horizontalmente
        alignItems: 'center', // Centrar el contenido verticalmente
        position: 'fixed', // Fijo en la parte superior
        top: 0,
        left: 0,
        zIndex: 1000, // Asegura que el header esté sobre otros elementos
      }}
    >
      {/* Mini rectángulo para el logo */}
      <Box
        sx={{
          width: '80px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '4px',
          position: 'absolute',
          left: '10px',
        }}
      >
        {/* Aquí se puede poner el logo de F1 */}
        <img
           src={f1Url}
          alt="F1 Logo"
          style={{ width: '100%', height: '80%' }} // Ajusta el tamaño del logo
        />
      </Box>

      {/* Texto principal del Header */}
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        ¡Te sientes con suerte?!
      </Typography>
    </Box>
  );
};

export default Header;
