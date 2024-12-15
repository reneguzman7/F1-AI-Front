import React from 'react';
import { Box, Typography } from '@mui/material';

interface FloatingComponentProps {
  items: {
    number: number;           // Número en el podio
    shieldImage: string;      // URL de la imagen del escudo
    pilotImage: string;       // URL de la imagen del piloto
    carImage: string;         // URL de la imagen del auto
  }[];
}

const FloatingComponent: React.FC<FloatingComponentProps> = ({ items }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        borderRadius: '10px',
        zIndex: 1000,
        width: '300px', // Ancho del contenedor ajustado para evitar desbordamiento
        maxHeight: '80vh', // Altura máxima para hacer el scroll
        overflowY: 'auto', // Habilitar el scroll cuando los elementos superan la altura
        overflowX: 'hidden', // Evitar el desbordamiento horizontal
        scrollbarWidth: 'thin', // Barra de desplazamiento más delgada en Firefox
        scrollbarColor: '#888 #252020', // Color del thumb y el track en Firefox
      }}
      // Estilo para cuando el mouse esté cerca
      onMouseEnter={(e) => {
        e.currentTarget.style.scrollbarWidth = 'thin';
        e.currentTarget.style.scrollbarColor = '#888 #252020';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.scrollbarWidth = 'none';
        e.currentTarget.style.scrollbarColor = '#252020';
      }}
    >
      {/* Contenedor para el título "Pilotos" */}
      <div
        style={{
          width: '94%',
          backgroundColor: '#E10600', // Fondo rojo
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: 'white', // Texto blanco
            fontWeight: 'bold',
          }}
        >
          Pilotos
        </Typography>
      </div>

      {/* Sección para el contenido de los items (Escudo, Piloto, Carro) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Ajustar para que ocupe todo el ancho del contenedor
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
              backgroundColor: '#444',
              borderRadius: '8px',
              padding: '8px',
              width: '95%',
              justifyContent: 'flex-start',
              position: 'relative',
              height: '70px',
              overflow: 'hidden', // Prevenir desbordamiento dentro de cada item
            }}
          >
            {/* Sección 1: Número */}
            <div
              style={{
                width: '25px',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                marginRight: '10px',
                overflow: 'hidden', // Prevenir desbordamiento de los números
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#fff',
                  zIndex: 1,
                }}
              >
                {item.number}
              </Typography>
            </div>

            {/* Sección 2: Escudo */}
            <div
              style={{
                width: '70px', // Ancho del escudo ajustado
                height: '50px', // Cuadrar esto
                backgroundImage: `url(${item.shieldImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                padding: 0,
                marginRight: '10px',
                overflow: 'hidden', // Prevenir desbordamiento de la imagen del escudo
              }}
            />

            {/* Sección 3: Piloto */}
            <div
              style={{
                width: '50px', // Ancho del piloto ajustado
                height: '56px',
                backgroundImage: `url(${item.pilotImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                marginRight: '10px',
                overflow: 'hidden', // Prevenir desbordamiento de la imagen del piloto
              }}
            />

            {/* Sección 4: Carro */}
            <div
              style={{
                width: '170px', // Ancho del carro ajustado
                height: '40px',
                backgroundImage: `url(${item.carImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                overflow: 'hidden', // Prevenir desbordamiento de la imagen del carro
              }}
            />
          </div>
        ))}
      </div>

      {/* Personalización de la barra de desplazamiento en navegadores Webkit (Chrome, Safari) */}
      <style>
        {`
          /* Barra de desplazamiento más delgada */
          ::-webkit-scrollbar {
            width: 8px; /* Ancho más pequeño */
          }
          ::-webkit-scrollbar-thumb {
            background-color: #888; /* Color de la barra de desplazamiento */
            border-radius: 10px;
          }
          ::-webkit-scrollbar-track {
            background-color: #252020; /* Color del track */
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingComponent;
