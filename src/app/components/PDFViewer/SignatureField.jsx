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
  const [lastTap, setLastTap] = useState(null);

  useEffect(() => {
    const savedSize = localStorage.getItem(`signature-size-${documentId}-${pageNumber}-${id}`);
    if (savedSize) {
      setSize(JSON.parse(savedSize));
    }
  }, [id, documentId, pageNumber]);

  const handleDoubleTap = (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300; // Tiempo en milisegundos, ajustar si es necesario
    if (lastTap && now - lastTap < DOUBLE_TAP_DELAY) {
      openModal();
    } else {
      setLastTap(now);
    }
  };

  const onResizeStop = (e, direction, ref, delta, position) => {
    const newSize = {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
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

  const removeButtonStyle = {
    position: 'absolute',
    right: '30px', // Adjusted to give space next to the resize handle
    top: '-15px',
    zIndex: 100,
    background: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    height: '20px',
    width: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
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
        const newSize = { ...size, x: d.x, y: d.y };
        setSize(newSize);
        localStorage.setItem(
          `signature-size-${documentId}-${pageNumber}-${id}`,
          JSON.stringify(newSize)
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
      <div style={fieldStyle} onDoubleClick={openModal} onTouchEnd={handleDoubleTap}>
        {!signatureImage && <span>Signature</span>}
        <button
          style={removeButtonStyle}
          onClick={onRemove}
          onTouchEnd={(e) => {
            // Evita la propagación para que no dispare otros eventos de toque no deseados.
            e.stopPropagation();
            onRemove();
          }}
        >
          X
        </button>
        {/* Resize Handles */}
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
