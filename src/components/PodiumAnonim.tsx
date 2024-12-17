import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SportsScoreIcon from '@mui/icons-material/SportsScore'; // Medalla (se reutiliza)

interface PodiumProps {
  // prediction: string[]; // Ya no es necesario para imágenes estáticas
  containerHeight?: string | number; // Altura dinámica del contenedor (por defecto es '75%')
}

const Podium: React.FC<PodiumProps> = ({ containerHeight = '75%' }) => {
  const [loadedCars, setLoadedCars] = useState(0);
  const [medalColors, setMedalColors] = useState<string[]>(['gold', 'silver', '#cd7f32']); // Colores iniciales de las medallas

  // Rotar las medallas cada 1.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setMedalColors((prevColors) => {
        // Rotar los colores cíclicamente
        const rotatedColors = [...prevColors];
        rotatedColors.push(rotatedColors.shift()!); // Mueve el primer color al final del array
        return rotatedColors;
      });
    }, 1500); // Rotar cada 1.5 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const carVariants = {
    initial: { 
      opacity: 0, 
      y: -300, // Comienza fuera de la pantalla hacia arriba
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 100 
      }
    },
    animate: {
      opacity: 1,
      y: 0, // Todos los coches en la misma altura
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 50,
        bounce: 0.4, 
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: -200, // Comienza fuera de la pantalla hacia arriba
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 100 
      }
    },
    animate: {
      opacity: 1,
      y: 0, // Todos los textos en la misma altura
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 50,
        bounce: 0.4 
      }
    }
  };

  const renderPodiumPosition = (index: number) => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '40%', 
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Renderiza la medalla según la posición */}
        <AnimatePresence>
          <motion.div
            key={`position-${index}`}
            initial="initial"
            animate="animate"
            variants={textVariants}
            style={{ position: 'relative' }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              {/* El icono de medalla reemplaza el número */}
              <SportsScoreIcon 
                sx={{ 
                  fontSize: 50, 
                  color: medalColors[index], // Color de medalla asignado de forma alternada
                  transition: 'color 0.5s ease' 
                }} 
              />
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Renderiza la imagen del coche en la posición del podio */}
        <Box 
          sx={{ 
            height: '150px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            width: '170px',
            marginTop: '0', // Asegura que no haya diferencias verticales
          }}
        >
          <AnimatePresence>
            {loadedCars > index && (
              <motion.div
                key={`car-${index}`}
                initial="initial"
                animate="animate"
                variants={carVariants}
                onAnimationComplete={() => {
                  if (index === loadedCars - 1 && loadedCars < 3) {
                    setLoadedCars(prev => prev + 1);
                  }
                }}
                style={{ position: 'absolute' }}
              >
                <img 
                  src={`/Unknown_Man${index + 1}.webp`} // Ruta con las imágenes de Unknown Man
                  alt={`Unknown Man ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Aseguramos que las imágenes se ajusten
                />
              </motion.div>
            )}
            {loadedCars <= index && (
              <Box 
                sx={{ 
                  position: 'absolute', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  width: '100%', 
                  height: '100%' 
                }}
              >
                <CircularProgress color="primary" />
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    setLoadedCars(1);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: containerHeight,  // Altura dinámica aquí
        maxWidth: '1200px',
        marginBottom: '20px',
        position: 'relative',
      }}
    >
      {/* Contenedor del podio con las posiciones de los coches */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {renderPodiumPosition(0)} {/* 3er lugar */}
        {renderPodiumPosition(1)} {/* 1er lugar */}
        {renderPodiumPosition(2)} {/* 2do lugar */}
      </Box>
    </Box>
  );
};

export default Podium;
