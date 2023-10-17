import React, { useState, useRef } from 'react';
import { Button } from '@material-ui/core';

const FileUploader = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelected(file);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    onFileSelected(file);
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '620px', // Ajusta el margen hacia arriba
        padding: '120px',
        border: '5px dashed #ccc',
        textAlign: 'center',
        cursor: 'pointer',
        background: isDragging ? '#f2f2f2' : 'white',
        borderRadius: '4px',
      }}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div style={{ marginBottom: '10px' }}>Arrastra y suelta un archivo PDF aquí</div>
      <div style={{ marginBottom: '10px' }}>o</div>
      <Button variant="contained" style={{ backgroundColor: '#ff9e43' }} onClick={openFileDialog}>
        Selecciona un archivo
      </Button>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileUploader;
