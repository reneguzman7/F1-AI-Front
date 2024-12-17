// src/components/FloatingComponent.tsx

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface FloatingComponentProps {
  items: {
    number: number;           // Número en el podio
    shieldImage: string;      // URL de la imagen del escudo
    pilotImage: string;       // URL de la imagen del piloto
    carImage: string;         // URL de la imagen del auto
    pilotName: string;        // Nombre del piloto
    historicalData: string;   // Datos históricos del piloto
  }[];
}

const FloatingComponent: React.FC<FloatingComponentProps> = ({ items }) => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const handlePress = (index: number) => {
    setExpandedIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '30px',
        left: '15px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        borderRadius: '10px',
        zIndex: 1000,
        width: '320px',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#E10600',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Orden de salida en Parrilla
        </Typography>
      </Box>

      {items.map((item, index) => {
        const isExpanded = expandedIndexes.includes(index);

        return (
          <Box key={index}>
            <Box
              component={motion.div}
              onClick={() => handlePress(index)}
              animate={isExpanded ? { x: 100 } : { x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                backgroundColor: isExpanded ? '#555' : '#444',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '10px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#fff' }}
                >
                  {item.number}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: '40px',
                  height: '50px',
                  backgroundImage: `url(${item.shieldImage})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  marginRight: '10px',
                }}
              />

              <Box
                sx={{
                  width: '50px',
                  height: '56px',
                  backgroundImage: `url(${item.pilotImage})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                  marginRight: '10px',
                }}
              />

              <Box
                sx={{
                  width: '170px',
                  height: '40px',
                  backgroundImage: `url(${item.carImage})`,
                  backgroundSize: 'cover',
                  borderRadius: '10px',
                }}
              />
            </Box>

            {isExpanded && (
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                sx={{
                  backgroundColor: '#333',
                  borderRadius: '8px',
                  margin: '8px 0',
                  padding: '10px',
                  color: 'white',
                  fontSize: '14px',
                  width: '95%',
                }}
              >
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                  {item.pilotName} - {item.historicalData}
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default FloatingComponent;
