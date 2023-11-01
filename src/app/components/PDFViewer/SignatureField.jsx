import React from 'react';
import { Rnd } from 'react-rnd';

const defaultPosition = {
  width: 200,
  height: 50,
};

const SignatureField = ({ onRemove, initialPosition, onPositionChange }) => {
  return (
    <Rnd
      default={{
        ...defaultPosition,
        x: initialPosition.x,
        y: initialPosition.y,
      }}
      bounds="parent"
      onDragStop={(e, d) => {
        if (onPositionChange) {
          onPositionChange(d.x, d.y);
        }
      }}
    >
      <div
        style={{
          border: '1px solid black',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
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
