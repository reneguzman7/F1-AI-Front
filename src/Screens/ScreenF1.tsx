// src/Screens/ScreenF1.tsx
import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import Podium from '../components/Podium';
import PodiumAnonim from '../components/PodiumAnonim';
import Footer from '../components/footer';
import FloatingComponent from '../components/sideBar';
import { items } from '../components/items';
import InlineSVG from 'react-inlinesvg';
import Header from '../components/banner';
import { fetchPodiumData, PilotData } from '../api/podiumApi';

const ScreenF1: React.FC = () => {
  const [podiumData, setPodiumData] = useState<PilotData[]>([]);
  const [isPredicted, setIsPredicted] = useState(false);
  const [key, setKey] = useState(0);
  const [balance, setBalance] = useState(12);

  const handleFetchPodiumData = async () => {
    if (balance <= 0) return; // No hacer nada si el saldo es 0 o menor

    try {
      const data = await fetchPodiumData();
      setPodiumData(data);
      setIsPredicted(true);
      setKey(prevKey => prevKey + 1);
      setBalance(prevBalance => prevBalance - 1);
    } catch (error) {
      console.error('Error al obtener los datos del podio:', error);
    }
  };

  return (
    <>
      <Header balance={balance} />

      {/* Fondo de pantalla */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/fondo-de-pantalla-de-formula-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          zIndex: -1,
        }}
      />

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          padding: '0 20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Sección del Podio */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: '60px',
            marginBottom: '35px',
            minHeight: '300px',
            maxWidth: '800px',
            width: '100%',
            backgroundColor: '#333',
            borderRadius: '16px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
            padding: '20px',
          }}
        >
          {isPredicted ? (
            <Podium key={key} podiumData={podiumData} />
          ) : (
            <PodiumAnonim key={key} />
          )}
        </Box>

        {/* Botón Predecir */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', position: 'relative' }}>
          <Box sx={{ position: 'absolute', left: '-260px', top: '0' }}>
            <FloatingComponent items={items} />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: balance > 0 ? '#FF6F00' : '#BDBDBD',
              '&:hover': { backgroundColor: balance > 0 ? '#E10600' : '#BDBDBD' },
              fontSize: '20px',
              padding: '12px 15px',
              borderRadius: '8px',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
            onClick={handleFetchPodiumData}
            disabled={balance <= 0}
          >
            Predecir
          </Button>
        </Box>
        <Footer />
      </Container>

      {/* Elemento flotante (opcional) */}
      {isPredicted && (
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            zIndex: 1,
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#333333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '6px solid #71736cd6',
          }}
        >
          <InlineSVG
            src="/assets/12.svg"
            key={key}
            style={{
              width: '90%',
              height: '90%',
              background: 'transparent',
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ScreenF1;