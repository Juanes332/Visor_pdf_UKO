﻿// SignatureField.js
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import SignatureModal from './SignatureModal'; // Asegúrate de importar el componente

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
  const savedSignature = localStorage.getItem('signatureImage');
  const [signatureImage, setSignatureImage] = useState(savedSignature);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldBackground, setFieldBackground] = useState(getRandomColor());

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const saveSignature = (signature) => {
    setSignatureImage(signature);
    // Guardar la firma en el almacenamiento local
    localStorage.setItem('signatureImage', signature);
    setFieldBackground('transparent');
  };

  const fieldStyle = {
    border: '1px solid black',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: signatureImage ? 'transparent' : fieldBackground, // Usa el color de fondo solo si no hay imagen de firma
    backgroundImage: `url(${signatureImage})`, // Establecer la imagen de la firma como fondo si está presente
    backgroundSize: 'contain', // Asegúrate de que la imagen de la firma se ajuste al contenedor
    backgroundRepeat: 'no-repeat', // No repetir la imagen de fondo
    backgroundPosition: 'center', // Centrar la imagen de fondo
  };

  const resizeDotStyle = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    background: '#fff',
    border: '1px solid #007bff',
    borderRadius: '50%', // Hace que tenga forma circular
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
      enableResizing={{
        topLeft: true, // Permitir cambiar tamaño desde la esquina superior izquierda
        topRight: true, // Permitir cambiar tamaño desde la esquina superior derecha
        bottomLeft: true, // Permitir cambiar tamaño desde la esquina inferior izquierda
        bottomRight: true, // Permitir cambiar tamaño desde la esquina inferior derecha
      }}
      lockAspectRatio={true} // Mantener la relación de aspecto al cambiar el tamaño
    >
      <div style={{ ...fieldStyle, border: '1px solid #007bff' }} onDoubleClick={openModal}>
        {!signatureImage && <span>Signature</span>}
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
        <div style={{ ...resizeDotStyle, top: '-5px', left: '-5px' }} />
        <div style={{ ...resizeDotStyle, top: '-5px', right: '-5px' }} />
        <div style={{ ...resizeDotStyle, bottom: '-5px', left: '-5px' }} />
        <div style={{ ...resizeDotStyle, bottom: '-5px', right: '-5px' }} />
      </div>
      <SignatureModal isOpen={isModalOpen} onClose={closeModal} onSave={saveSignature} />
    </Rnd>
  );
};

export default SignatureField;
