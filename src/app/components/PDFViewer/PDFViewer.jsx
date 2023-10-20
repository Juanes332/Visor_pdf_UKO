// Componente de visualización de PDF (PdfViewer.js)
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
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
}));

const PdfViewer = () => {
  const classes = useStyles();
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showFileUploader, setShowFileUploader] = useState(true);
  const [thumbnails, setThumbnails] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleFilesSelected = (files) => {
    setSelectedFiles(Array.from(files));
    setShowFileUploader(false);
    setCurrentFileIndex(0);
  };

  const handleBackToUploader = () => {
    setSelectedFiles([]);
    setShowFileUploader(true);
  };

  const handleThumbnailClick = (page) => {
    setPageNumber(page);
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
                onLoadSuccess={onDocumentLoadSuccess}
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
              <IconButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Grid>
          {selectedFiles.length > 0 && (
            <Grid item xs={12} sm={3} className={`miniatures ${classes.miniatures}`}>
              <Paper style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <List>
                  {selectedFiles.map((file, index) => (
                    <ListItem
                      key={index}
                      button
                      onClick={() => {
                        setCurrentFileIndex(index);
                        setPageNumber(1);
                      }}
                      className={currentFileIndex === index ? classes.selectedThumbnail : null}
                    >
                      <ListItemIcon>
                        <Document file={file}>
                          <Page
                            pageNumber={1}
                            width={150}
                            renderTextLayer={!isMobile}
                            renderAnnotationLayer={false}
                            style={{ maxWidth: 'min-content' }}
                          />
                        </Document>
                      </ListItemIcon>
                    </ListItem>
                  ))}
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
