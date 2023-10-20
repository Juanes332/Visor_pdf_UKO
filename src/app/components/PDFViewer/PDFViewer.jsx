import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
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
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FileUploader from './FileUploader';

import './pdf.css';

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
  selectedThumbnail: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  documentButton: {
    cursor: 'pointer',
    marginBottom: '5px',
  },
}));

const PdfViewer = () => {
  const classes = useStyles();
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [numPages, setNumPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showFileUploader, setShowFileUploader] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState(null); // Nuevo estado para rastrear el documento seleccionado
  const [documentNames, setDocumentNames] = useState([]); // Estado para almacenar los nombres de los documentos
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Función para manejar la selección de un documento
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

    // Obtener el número de páginas de cada archivo y almacenarlos en numPages
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

    // Obtener los nombres de los documentos y almacenarlos en documentNames
    const names = Array.from(files).map((file) => file.name);
    setDocumentNames(names);

    Promise.all(pagesPromises).then((pages) => {
      setNumPages(pages);
    });
  };

  const handleBackToUploader = () => {
    setSelectedFiles([]);
    setShowFileUploader(true);
    setSelectedDocument(null); // Reiniciar el documento seleccionado
  };

  const handleThumbnailClick = (page) => {
    setPageNumber(page);
    setCurrentFileIndex(selectedDocument); // Asegura que el índice del archivo seleccionado sea el índice actual
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
                file={selectedFiles[currentFileIndex]}
                onLoadSuccess={({ numPages }) => {
                  setNumPages((prevPages) => {
                    const updatedPages = [...prevPages];
                    updatedPages[currentFileIndex] = numPages;
                    return updatedPages;
                  });
                }}
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

                    // Renderizar el botón del documento
                    const documentButton = (
                      <ListItem
                        key={index}
                        button
                        onClick={() => handleDocumentSelect(index)}
                        className={`${isSelected ? classes.selectedThumbnail : ''} ${
                          classes.documentButton
                        }`}
                      >
                        <ListItemText primary={documentName} />
                      </ListItem>
                    );

                    // Renderizar las miniaturas solo si este documento está seleccionado
                    const numPagesForFile = numPages[index];
                    const thumbnailPromises = Array.from({ length: numPagesForFile }, (_, i) => (
                      <ListItem
                        key={i}
                        button
                        onClick={() => handleThumbnailClick(i + 1)}
                        className={currentFileIndex === index ? classes.selectedThumbnail : null}
                      >
                        <ListItemIcon>
                          <Document file={file}>
                            <Page
                              pageNumber={i + 1}
                              width={150}
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
    </Container>
  );
};

export default PdfViewer;
