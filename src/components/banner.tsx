import React from 'react';
import { Box, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet'; // Ícono de wallet
import PersonIcon from '@mui/icons-material/Person'; // Ícono de cuenta de perfil
import f1Url from '../../public/assets/IG_LogoTicker_9_F1.webp';

interface HeaderProps {
  balance: number; // Propiedad para el saldo
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
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
        <img
          src={f1Url}
          alt="F1 Logo"
          style={{ width: '100%', height: '80%' }} // Ajusta el tamaño del logo
        />
      </Box>

      {/* Texto principal del Header en el centro */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        podiumF1.io
      </Typography>

      {/* Ícono de Wallet y saldo a la derecha con más margen */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: '20px', // Aumentamos el margen a la derecha
        }}
      >
        <WalletIcon sx={{ color: '#fff', fontSize: '30px', mr: 1 }} />
        
        {/* Cambiar color del saldo cuando sea 0 */}
        <Typography
          variant="body2"
          sx={{
            color: balance > 0 ? '#fff' : '#BDBDBD', // Color gris si el saldo es 0
            fontWeight: 'normal',
          }}
        >
          ${balance.toFixed(2)} {/* Muestra el saldo con dos decimales */}
        </Typography>

        {/* Ícono de cuenta de perfil */}
        <PersonIcon sx={{ color: '#fff', fontSize: '30px', ml: 2 }} />
      </Box>
    </Box>
  );
};

export default Header;
