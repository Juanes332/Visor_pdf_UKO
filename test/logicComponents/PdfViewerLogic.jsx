export const initialState = {
  currentFileIndex: 0,
  numPages: [],
  pageNumber: 1,
  selectedFiles: [],
  showFileUploader: true,
  selectedDocument: null,
  documentNames: [],
};

export const handleDocumentSelect = (state, documentIndex) => {
  return {
    ...state,
    selectedDocument: documentIndex,
  };
};

export const handlePreviousPage = (state) => {
  if (state.pageNumber > 1) {
    return {
      ...state,
      pageNumber: state.pageNumber - 1,
    };
  }
  return state;
};

export const handleNextPage = (state) => {
  if (state.pageNumber < state.numPages[state.currentFileIndex]) {
    return {
      ...state,
      pageNumber: state.pageNumber + 1,
    };
  }
  return state;
};

export const handleFilesSelected = (state, files) => {
  const selectedFiles = Array.from(files);
  const documentNames = selectedFiles.map((file) => file.name);
  const numPages = selectedFiles.map(() => 1); // Simplificado para la prueba. Ajustar según la necesidad real.

  return {
    ...state,
    selectedFiles,
    documentNames,
    numPages,
    showFileUploader: false,
    currentFileIndex: 0,
  };
};

export const handleBackToUploader = (state) => {
  return {
    ...state,
    selectedFiles: [],
    showFileUploader: true,
    selectedDocument: null,
  };
};

export const handleThumbnailClick = (state, page) => {
  return {
    ...state,
    pageNumber: page,
    currentFileIndex: state.selectedDocument,
  };
};
