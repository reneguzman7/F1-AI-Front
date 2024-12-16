import React from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SportsScoreIcon from '@mui/icons-material/SportsScore';

interface PodiumProps {
  podiumData: {
    Piloto: string;
    shieldImage: string;
    pilotImage: string;
    carImage: string;
  }[];
}

const Podium: React.FC<PodiumProps> = ({ podiumData }) => {
  const carVariants = {
    initial: { opacity: 0, y: -300, transition: { duration: 1.5, type: "spring", stiffness: 100 } },
    animate: (index: number) => ({
      opacity: 1,
      y: index === 0 ? 0 : index === 1 ? -60 : 30,
      transition: { duration: 1.5, type: "spring", stiffness: 50, bounce: 0.4, delay: index === 0 ? 1 : 0 }
    })
  };

  const textVariants = {
    initial: { opacity: 0, y: -200, transition: { duration: 1.5, type: "spring", stiffness: 100 } },
    animate: (index: number) => ({
      opacity: 1,
      y: index === 0 ? 0 : index === 1 ? -60 : 30,
      transition: { duration: 1.5, type: "spring", stiffness: 50, bounce: 0.4 }
    })
  };

  const renderPodiumPosition = (index: number, data: any) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', height: '100%', position: 'relative' }}>
        <AnimatePresence>
          <motion.div key={`position-${index}`} initial="initial" animate={textVariants.animate(index)} variants={textVariants} style={{ position: 'relative' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              <SportsScoreIcon sx={{ fontSize: 50, color: index === 0 ? 'gold' : index === 1 ? 'silver' : '#cd7f32', transition: 'color 0.5s ease' }} />
            </Typography>
          </motion.div>
        </AnimatePresence>
        <Box sx={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '170px', marginTop: '-10px' }}>
          <AnimatePresence>
            <motion.div key={`car-${index}`} initial="initial" animate={carVariants.animate(index)} variants={carVariants} style={{ position: 'absolute' }}>
              <img src={data.carImage} alt={`Car ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>
          </AnimatePresence>
        </Box>
        <AnimatePresence>
          <motion.div key={`name-${index}`} initial="initial" animate={textVariants.animate(index)} variants={textVariants} style={{ position: 'relative' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
              {data.Piloto}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '75%', maxWidth: '1200px', marginBottom: '20px', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {podiumData.map((data, index) => renderPodiumPosition(index, data))}
      </Box>
    </Box>
  );
};

export default Podium;