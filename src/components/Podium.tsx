import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import F1Car3D from "../components/F1car";

interface PodiumProps {
  prediction: string[];
  names: string[]; // Nombres de los pilotos
}

const Podium: React.FC<PodiumProps> = ({ prediction, names }) => {
  const [loadedCars, setLoadedCars] = useState(0);

  const carVariants = {
    initial: { 
      opacity: 0, 
      y: -300,
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 100 
      }
    },
    animate: { 
      opacity: 1, 
      y: 30,
      transition: { 
        duration: 1.5, 
        type: "spring", 
        stiffness: 50,
        bounce: 0.4 
      }
    }
  };

  const carRotations = [75, 75, 75];

  const renderPodiumPosition = (index: number, position: number) => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '30%', 
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Renderiza el lugar como 2, 1 o 3 */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          {position}
        </Typography>
        
        {/* Renderiza el coche en la posición del podio */}
        <Box 
          sx={{ 
            height: '150px',  // Reducido para subir la caja
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative',
            width: '170px',
            marginTop: '-20px', // Subir la caja un poco más
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
                <F1Car3D 
                  position={[0, 0, 0]} 
                  scale={0.50} 
                  rotation={[0, carRotations[index], 0]} 
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

        {/* Nombre debajo del coche */}
        <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
          {names[index]}  {/* Mostrar el nombre correspondiente */}
        </Typography>
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
        justifyContent: 'space-around',
        width: '100%',
        height: '60%', 
        maxWidth: '1200px',
        marginBottom: '30px',
        position: 'relative',
      }}
    >
      {/* Renderiza las posiciones con 2, 1, 3 */}
      {renderPodiumPosition(0, 2)}
      {renderPodiumPosition(1, 1)}
      {renderPodiumPosition(2, 3)}
    </Box>
  );
};

export default Podium;
