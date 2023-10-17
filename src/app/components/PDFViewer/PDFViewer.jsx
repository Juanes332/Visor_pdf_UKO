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
    [theme.breakpoints.down(1355)]: {
      '& .miniatures': {
        display: 'block',
      },
    },
  },
  miniatures: {
    display: 'block',
  },
}));

const PdfViewer = () => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showFileUploader, setShowFileUploader] = useState(true);
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

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    setShowFileUploader(false);
    setPageNumber(1);
  };

  const handleBackToUploader = () => {
    setSelectedFile(null);
    setShowFileUploader(true);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      {showFileUploader ? (
        <FileUploader onFileSelected={handleFileSelected} />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                width={isMobile ? 300 : 800}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                style={{ maxWidth: 'min-content' }}
              />
            </Document>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <IconButton onClick={handlePreviousPage} disabled={pageNumber <= 1}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton onClick={handleNextPage} disabled={pageNumber >= numPages}>
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.miniatures}>
            <Paper style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <List>
                {Array.from({ length: numPages }, (_, i) => (
                  <ListItem button key={i} onClick={() => setPageNumber(i + 1)}>
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    Página {i + 1}
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
      {selectedFile && (
        <IconButton
          onClick={handleBackToUploader}
          style={{ position: 'absolute', top: '10px', left: '10px' }}
        >
          <ChevronLeftIcon /> Volver a seleccionar archivo
        </IconButton>
      )}
    </Container>
  );
};

export default PdfViewer;
