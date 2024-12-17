import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import Podium from '../components/Podium'; // Asegúrate de que Podium esté correctamente importado
import PodiumAnonim from '../components/PodiumAnonim'; // Importa el nuevo componente PodiumAnonim
import Footer from '../components/footer';
import FloatingComponent from '../components/sideBar';
import { items } from '../components/items';
import InlineSVG from 'react-inlinesvg';
import Header from '../components/banner'; // Asegúrate de importar el Header

const ScreenF1: React.FC = () => {
  const [prediction, setPrediction] = useState<string[]>([]); // Predicción aleatoria
  const [isPredicted, setIsPredicted] = useState(false); // Bandera para indicar si se ha hecho la predicción
  const [key, setKey] = useState(0); // Key para reiniciar los componentes que dependen de una actualización
  const [balance, setBalance] = useState(12); // Saldo inicial

  const names = ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc"];

  // Función para aleatorizar las predicciones
  const randomizePrediction = () => {
    if (balance <= 0) return; // No hacer nada si el saldo es 0 o menor

    const shuffled = [...names].sort(() => Math.random() - 0.5); // Aleatoriza los nombres
    setPrediction(shuffled); // Establece la predicción
    setIsPredicted(true); // Marca la predicción como completada
    setKey(prevKey => prevKey + 1); // Cambia el key para reiniciar el SVG y Podium

    // Reducir el saldo en 1 cada vez que se haga una predicción
    setBalance(prevBalance => prevBalance - 1);
  };

  return (
    <>
      {/* Header con el saldo como propiedad */}
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
          minHeight: '600px',
          padding: { xs: '0 10px', sm: '0 20px' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Sección del Podio */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: { xs: '40px', sm: '60px' },
            marginBottom: '35px',
            minHeight: { xs: '200px', sm: '300px' },
            maxWidth: '800px',
            width: '100%',
            backgroundColor: '#333',
            borderRadius: '16px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
            padding: { xs: '10px', sm: '20px' },
          }}
        >
          {/* Renderiza PodiumAnonim si no se ha presionado el botón */}
          {isPredicted ? (
            <Podium key={key} prediction={prediction} podiumData={[]} /> // Pasa las predicciones reales a Podium
          ) : (
            <PodiumAnonim key={key} /> // Muestra PodiumAnonim cuando no hay predicción
          )}
        </Box>

        {/* Botón de predicción y componente flotante */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px',
            position: 'relative',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ position: 'absolute', left: { xs: '0', sm: '-260px' }, top: '0' }}>
            <FloatingComponent items={items} />
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: balance > 0 ? '#FF6F00' : '#BDBDBD',
              '&:hover': { backgroundColor: balance > 0 ? '#E10600' : '#BDBDBD' },
              fontSize: { xs: '16px', sm: '20px' },
              padding: { xs: '10px 12px', sm: '12px 15px' },
              borderRadius: '8px',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
            onClick={randomizePrediction}
            disabled={balance <= 0} // Deshabilita el botón si el saldo es 0
          >
            Predecir
          </Button>
        </Box>

        {/* Footer */}
        <Footer />
      </Container>

      {/* Mostrar el SVG animado en un minimapa redondo */}
      {isPredicted && (
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            zIndex: 1,
            width: { xs: '120px', sm: '200px' },
            height: { xs: '120px', sm: '200px' },
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#333333', // Fondo negro para el borde
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '6px solid #71736cd6', // Borde grueso de color naranja
          }}
        >
          <InlineSVG
            src="/assets/12.svg"
            key={key} // Cambia el key para reiniciar el SVG
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
