import React, { useState, useRef } from 'react';
import { Button, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const FileUploader = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileValidation = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type !== 'application/pdf') {
        // Verificar si el archivo NO es de tipo PDF
        setSnackbarMessage('Solo se permiten archivos PDF.');
        fileInputRef.current.value = ''; // Reseteamos el valor del input
        return;
      }
      if (files[i].size > 10 * 1024 * 1024) {
        // 10MB en bytes
        setSnackbarMessage('No se pueden subir archivos mayores a 10MB.');
        fileInputRef.current.value = ''; // Reseteamos el valor del input
        return;
      }
    }
    onFilesSelected(files);
    fileInputRef.current.value = ''; // También lo reseteamos aquí para cuando los archivos son válidos
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    handleFileValidation(files);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileValidation(files);
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
        marginBottom: '620px',
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
      <div style={{ marginBottom: '10px' }}>Arrastra y suelta archivos PDF aquí</div>
      <div style={{ marginBottom: '10px' }}>o</div>
      <Button variant="contained" style={{ backgroundColor: '#ff9e43' }} onClick={openFileDialog}>
        Selecciona archivos
      </Button>
      <input
        type="file"
        accept=".pdf"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={6000}
        onClose={() => setSnackbarMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbarMessage(null)}
          severity={snackbarMessage === 'Solo se permiten archivos PDF.' ? 'warning' : 'error'}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FileUploader;
