import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import SignatureModal from './SignatureModal';

let defaultPosition = {
  width: 200,
  height: 50,
};

// Función para generar un color aleatorio
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SignatureField = ({
  id,
  documentId,
  pageNumber,
  onRemove,
  initialPosition,
  onPositionChange,
}) => {
  const savedSignature = localStorage.getItem(`signature-${documentId}-${pageNumber}-${id}`);
  const [signatureImage, setSignatureImage] = useState(savedSignature);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldBackground, setFieldBackground] = useState(getRandomColor());
  const [size, setSize] = useState({
    width: defaultPosition.width,
    height: defaultPosition.height,
    ...initialPosition,
  });

  useEffect(() => {
    const savedSize = localStorage.getItem(`signature-size-${documentId}-${pageNumber}-${id}`);
    if (savedSize) {
      setSize(JSON.parse(savedSize));
    }
  }, [id, documentId, pageNumber]);

  const onResizeStop = (e, direction, ref, delta, position) => {
    const newSize = {
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    };
    setSize(newSize);
    localStorage.setItem(
      `signature-size-${documentId}-${pageNumber}-${id}`,
      JSON.stringify(newSize)
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const saveSignature = (signature) => {
    setSignatureImage(signature);
    localStorage.setItem(`signature-${documentId}-${pageNumber}-${id}`, signature);
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
    backgroundColor: signatureImage ? 'transparent' : fieldBackground,
    backgroundImage: `url(${signatureImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
      size={{ width: size.width, height: size.height }}
      position={{ x: size.x, y: size.y }}
      default={{
        ...defaultPosition,
        x: initialPosition.x,
        y: initialPosition.y,
      }}
      bounds=".documentContainer"
      minWidth={32.1094}
      minHeight={30.8594}
      maxWidth={380.172}
      maxHeight={200.431}
      onResizeStop={onResizeStop}
      onDragStop={(e, d) => {
        setSize((prevSize) => ({ ...prevSize, x: d.x, y: d.y }));
        localStorage.setItem(
          `signature-size-${documentId}-${pageNumber}-${id}`,
          JSON.stringify({ ...size, x: d.x, y: d.y })
        );
        if (onPositionChange) {
          onPositionChange(d.x, d.y);
        }
      }}
      enableResizing={{
        topLeft: true,
        topRight: true,
        bottomLeft: true,
        bottomRight: true,
      }}
      lockAspectRatio={true}
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
      {isModalOpen && (
        <SignatureModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={saveSignature}
          existingSignature={signatureImage}
        />
      )}
    </Rnd>
  );
};

export default SignatureField;
