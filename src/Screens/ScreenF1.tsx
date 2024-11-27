import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Podium from '../components/Podium';  // Asegúrate de que esta sea la ruta correcta
import Banner from '../components/banner';
import Footer from '../components/footer';

const ScreenF1: React.FC = () => {
  const [prediction, setPrediction] = useState<string[]>([]);  // Solo cambiamos prediction
  const [isPredicted, setIsPredicted] = useState(false);

  // Lista de nombres de pilotos (no debe cambiar)
  const names = ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc"];

  // Ref para controlar si la animación ya se ejecutó
  const hasLoadedRef = useRef(false);

  // Función para aleatorizar la predicción
  const randomizePrediction = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);  // Mezcla aleatoria de nombres
    setPrediction(shuffled);  // Solo cambiamos prediction
    setIsPredicted(true);
    if (!hasLoadedRef.current) {
      hasLoadedRef.current = true;  // Marca la animación como ejecutada
    }
  };

  // Se asegura de que randomizePrediction solo se ejecute una vez
  useEffect(() => {
    if (!hasLoadedRef.current) {
      randomizePrediction(); // Inicializa la predicción al cargar
    }
  }, []);  // Solo se ejecuta una vez al cargar

  return (
    <>
      <Banner />

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

      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <Box sx={{
          width: '100%',
          height: '60px',
          backgroundColor: '#D32F2F',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            ¡Bienvenido al Podio F1!
          </Typography>
        </Box>
        
        {/* Sección del Podio */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: '100px',
          marginBottom: '40px',
          minHeight: '200px',
          maxWidth: '800px',
          width: '100%',
          backgroundColor: '#333',
          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          padding: '20px',
        }}>
          {isPredicted ? (
            <Podium prediction={prediction} names={names} />
          ) : (
            <Typography variant="h6" sx={{ color: '#FFF', fontWeight: 600 }}>
              Cargando predicción...
            </Typography>
          )}
        </Box>

        {/* Botón de predicción */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF6F00',
              '&:hover': { backgroundColor: '#E10600' },
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
            onClick={randomizePrediction}
          >
            Predecir
          </Button>
        </Box>

        {/* Footer */}
        <Footer />
      </Container>
    </>
  );
};

export default ScreenF1;
