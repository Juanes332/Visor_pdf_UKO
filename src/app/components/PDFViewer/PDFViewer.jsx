import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  makeStyles,
  Button,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FileUploader from './FileUploader';
import SignatureField from './SignatureField';
import ModalFirmaSuccess from './ModalFirmaSuccess';

import './pdf.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  pdfViewer: {
    flex: 1,
  },
  miniatures: {
    display: 'block',
    overflow: 'auto',
  },
  thumbnailImage: {
    width: '100%',
    cursor: 'pointer',
  },
  documentButton: {
    cursor: 'pointer',
    marginBottom: '5px',
  },
  thumbnailStyle: {
    margin: '5px 0',
    borderRadius: '5px',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  },
  addButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#1976D2',
    color: 'white',
    padding: '5px 15px',
    textTransform: 'none',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#1565C0',
    },
  },
}));

const PdfViewer = () => {
  const classes = useStyles();
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [numPages, setNumPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showFileUploader, setShowFileUploader] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [signatureFields, setSignatureFields] = useState(
    JSON.parse(localStorage.getItem('signatureFields')) || {}
  );
  const [documentNames, setDocumentNames] = useState([]);
  const documentContainerRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const navigate = useNavigate();

  let newSignatureFields = [];

  const handleDocumentSelect = (documentIndex) => {
    setSelectedDocument(documentIndex);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages[currentFileIndex]) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleFilesSelected = (files) => {
    setSelectedFiles(Array.from(files));
    setShowFileUploader(false);
    setCurrentFileIndex(0);

    const pagesPromises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const typedArray = new Uint8Array(event.target.result);
          pdfjs
            .getDocument(typedArray)
            .promise.then((pdf) => {
              resolve(pdf.numPages);
            })
            .catch(reject);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
      });
    });

    const names = Array.from(files).map((file) => file.name);
    setDocumentNames(names);

    Promise.all(pagesPromises).then((pages) => {
      setNumPages(pages);
    });
  };

  const handleBackToUploader = () => {
    setSelectedFiles([]);
    setSignatureFields([]); // Esto limpiará los campos de firma
    setShowFileUploader(true);
    setSelectedDocument(null);
  };

  const handleThumbnailClick = (page) => {
    setPageNumber(page);
    setCurrentFileIndex(selectedDocument);
  };

  const handleAddSignatureField = () => {
    const documentId = selectedFiles[currentFileIndex].name;
    const newField = {
      id: uuidv4(),
      pageNumber: pageNumber,
      x: 0,
      y: 0,
      width: 200, // Valor predeterminado para el ancho
      height: 50, // Valor predeterminado para la altura
      backgroundColor: getRandomColor(),
    };

    setSignatureFields((prevFields) => ({
      ...prevFields,
      [documentId]: [...(prevFields[documentId] || []), newField],
    }));
    // Guardamos el nuevo estado en el localStorage
    localStorage.setItem(
      'signatureFields',
      JSON.stringify({
        ...signatureFields,
        [documentId]: [...(signatureFields[documentId] || []), newField],
      })
    );
  };

  // Función para manejar la eliminación de un campo de firma
  const handleRemoveSignatureField = (documentId, idToRemove) => {
    setSignatureFields((prevFields) => ({
      ...prevFields,
      [documentId]: prevFields[documentId].filter((field) => field.id !== idToRemove),
    }));
  };

  const handlePositionChange = (documentId, id, x, y) => {
    setSignatureFields((prevFields) => ({
      ...prevFields,
      [documentId]: prevFields[documentId].map((field) =>
        field.id === id
          ? {
              ...field,
              x: x,
              y: y,
            }
          : field
      ),
    }));
    localStorage.setItem('signatureFields', JSON.stringify(newSignatureFields));
  };

  const handleSizeChange = (documentId, id, width, height) => {
    setSignatureFields((prevFields) => ({
      ...prevFields,
      [documentId]: prevFields[documentId].map((field) =>
        field.id === id
          ? {
              ...field,
              width,
              height,
            }
          : field
      ),
    }));
    localStorage.setItem('signatureFields', JSON.stringify(signatureFields));
  };

  const currentDocumentId = selectedFiles[currentFileIndex]?.name;

  const navigateHome = () => {
    handleCloseModal();
    navigate('/dashboard/firmaya'); // Navega al 'home' que sería la ruta raíz
    handleBackToUploader();
  };

  return (
    <Container maxWidth="lg" className={`pdfContainer`}>
      {showFileUploader ? (
        <FileUploader onFilesSelected={handleFilesSelected} />
      ) : (
        <Grid container spacing={2} className={classes.pdfViewer}>
          <Grid item xs={12} sm={9}>
            {selectedFiles.length > 0 && (
              <Document
                ref={documentContainerRef}
                file={selectedFiles[currentFileIndex]}
                onLoadSuccess={({ numPages }) => {
                  setNumPages((prevPages) => {
                    const updatedPages = [...prevPages];
                    updatedPages[currentFileIndex] = numPages;
                    return updatedPages;
                  });
                }}
                className="documentContainer"
              >
                <Page
                  pageNumber={pageNumber}
                  width={isMobile ? 300 : 800}
                  renderTextLayer={!isMobile}
                  renderAnnotationLayer={false}
                  style={{ maxWidth: 'min-content' }}
                />
              </Document>
            )}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <IconButton onClick={handlePreviousPage} disabled={pageNumber <= 1}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNextPage}
                disabled={pageNumber >= numPages[currentFileIndex]}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Grid>
          {selectedFiles.length > 0 && (
            <Grid item xs={12} sm={3} className={`miniatures ${classes.miniatures}`}>
              <Paper style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <List>
                  {selectedFiles.map((file, index) => {
                    const isSelected = selectedDocument === index;
                    const documentName = documentNames[index];

                    const documentButton = (
                      <ListItem
                        key={index}
                        button
                        onClick={() => handleDocumentSelect(index)}
                        className={classes.documentButton}
                      >
                        <ListItemText primary={documentName} />
                      </ListItem>
                    );

                    const numPagesForFile = numPages[index];
                    const thumbnailPromises = Array.from({ length: numPagesForFile }, (_, i) => (
                      <ListItem
                        key={i}
                        button
                        onClick={() => handleThumbnailClick(i + 1)}
                        className={classes.thumbnailStyle}
                      >
                        <ListItemIcon>
                          <Document file={file}>
                            <Page
                              pageNumber={i + 1}
                              width={170}
                              renderTextLayer={!isMobile}
                              renderAnnotationLayer={false}
                              style={{ maxWidth: 'min-content' }}
                            />
                          </Document>
                        </ListItemIcon>
                      </ListItem>
                    ));

                    return isSelected ? [documentButton, ...thumbnailPromises] : documentButton;
                  })}
                </List>
              </Paper>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Button
                  onClick={handleAddSignatureField}
                  variant="contained"
                  className={classes.addButton}
                >
                  Agregar campo de firma
                </Button>
                <Button
                  onClick={handleOpenModal}
                  variant="contained"
                  style={{
                    marginTop: '40px',
                    fontSize: '1.1rem',
                    backgroundColor: '#FF8C00',
                    color: '#ffffff',
                  }}
                >
                  Firmar
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      )}
      {selectedFiles.length > 0 && (
        <IconButton
          onClick={handleBackToUploader}
          style={{ position: 'absolute', top: '10px', left: '10px' }}
        >
          <ChevronLeftIcon /> Volver a seleccionar archivos
        </IconButton>
      )}
      {/* Renderizar todos los campos de firma basados en el estado */}
      {currentDocumentId &&
        signatureFields[currentDocumentId]
          ?.filter((field) => field.pageNumber === pageNumber)
          .map((field) => (
            <SignatureField
              key={field.id}
              id={field.id}
              documentId={currentDocumentId}
              pageNumber={pageNumber}
              initialPosition={{ x: field.x, y: field.y }}
              size={{ width: field.width, height: field.height }}
              onRemove={() => handleRemoveSignatureField(currentDocumentId, field.id)}
              onPositionChange={(x, y) => handlePositionChange(currentDocumentId, field.id, x, y)}
              onSizeChange={(width, height) =>
                handleSizeChange(currentDocumentId, field.id, width, height)
              }
              backgroundColor={field.backgroundColor}
            />
          ))}
      <ModalFirmaSuccess
        open={modalOpen}
        handleClose={handleCloseModal}
        navigateHome={navigateHome}
      />
    </Container>
  );
};

export default PdfViewer;
