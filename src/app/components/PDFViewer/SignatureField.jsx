import React from 'react';
import { Rnd } from 'react-rnd';

const defaultPosition = {
  width: 200,
  height: 50,
};

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const SignatureField = ({ onRemove, initialPosition, onPositionChange, backgroundColor }) => {
  // Utilizamos el backgroundColor que pasas como prop al estilo del div.
  const fieldStyle = {
    border: '1px solid black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: backgroundColor, // Añadido aquí
  };

  return (
    <Rnd
      default={{
        ...defaultPosition,
        x: initialPosition.x,
        y: initialPosition.y,
      }}
      bounds=".documentContainer"
      onDragStop={(e, d) => {
        if (onPositionChange) {
          onPositionChange(d.x, d.y);
        }
      }}
    >
      <div style={fieldStyle}>
        <span>Signature</span>
        <button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            background: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={onRemove}
        >
          X
        </button>
      </div>
    </Rnd>
  );
};

export default SignatureField;
