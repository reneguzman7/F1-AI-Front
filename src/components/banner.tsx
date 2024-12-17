import React from 'react';
import { Box, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import f1Url from '../../public/assets/IG_LogoTicker_9_F1.webp';

interface HeaderProps {
  balance: number; // Propiedad para el saldo
}

const Header: React.FC<HeaderProps> = ({ balance = 0 }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: '#E10600',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
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
          borderRadius: 1,
          position: 'absolute',
          left: '10px',
        }}
      >
        <img
          src={f1Url}
          alt="F1 Official Logo"
          style={{ width: '100%', height: '80%' }}
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

      {/* Ícono de Wallet y saldo a la derecha */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: '20px',
        }}
      >
        <WalletIcon sx={{ color: '#fff', fontSize: '30px', mr: 1 }} />

        <Typography
          variant="body2"
          sx={{
            color: balance > 0 ? '#fff' : '#BDBDBD',
            fontWeight: 'normal',
          }}
        >
          ${isNaN(balance) ? '0.00' : balance.toFixed(2)}
        </Typography>

        <PersonIcon sx={{ color: '#fff', fontSize: '30px', ml: 2 }} />
      </Box>
    </Box>
  );
};

export default Header;
