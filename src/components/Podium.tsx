import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { PilotData} from '../api/podiumApi';

interface PodiumProps {
  podiumData: PilotData[];
}

const Podium: React.FC<PodiumProps> = ({ podiumData }) => {
  const carVariants = {
    initial: { opacity: 0, y: -300, transition: { duration: 1.5, type: 'spring', stiffness: 100 } },
    animate: (index: number) => ({
      opacity: 1,
      y: index === 0 ? 0 : index === 1 ? -60 : 30,
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 50,
        bounce: 0.4,
        delay: index * 0.3,
      },
    }),
  };

  const textVariants = {
    initial: { opacity: 0, y: -200, transition: { duration: 1.5, type: 'spring', stiffness: 100 } },
    animate: (index: number) => ({
      opacity: 1,
      y: index === 0 ? 0 : index === 1 ? -60 : 30,
      transition: {
        duration: 1.5,
        type: 'spring',
        stiffness: 50,
        bounce: 0.4,
      },
    }),
  };

  const medalColors = ['gold', 'silver', '#cd7f32'];

  const renderPodiumPosition = (data: PilotData, index: number) => {
    return (
      <Box
        key={index}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '30%',
          position: 'relative',
        }}
      >
        {/* Medalla */}
        <AnimatePresence>
          <motion.div
            initial="initial"
            animate={textVariants.animate(index)}
            variants={textVariants}
            style={{ position: 'relative' }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              <SportsScoreIcon
                sx={{
                  fontSize: 50,
                  color: medalColors[index],
                  transition: 'color 0.5s ease',
                }}
              />
            </Typography>
          </motion.div>
        </AnimatePresence>
  
        {/* Imagen del piloto */}
        <Box
          sx={{
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            width: '170px',
            marginTop: '-10px',
          }}
        >
          <AnimatePresence>
            <motion.div
              initial="initial"
              animate={carVariants.animate(index)}
              variants={carVariants}
              style={{ position: 'absolute' }}
            >
              <img
                src={data.pilotImage} // Usar la ruta de la imagen desde `data`
                alt={`Piloto ${data.Piloto}`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </AnimatePresence>
        </Box>
  
        {/* Nombre del piloto */}
        <AnimatePresence>
          <motion.div
            initial="initial"
            animate={textVariants.animate(index)}
            variants={textVariants}
            style={{ position: 'relative' }}
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
              {data.Piloto}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  };

   return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {podiumData.map((data, index) => renderPodiumPosition(data, index))}
    </Box>
  );
};

export default Podium;