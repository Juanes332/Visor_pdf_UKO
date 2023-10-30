export const areFilesValid = (files) => {
  for (let i = 0; i < files.length; i++) {
    if (files[i].size > 10 * 1024 * 1024) {
      // 10MB en bytes
      return false;
    }
  }
  return true;
};

export const handleFileDialog = (fileInputRef) => {
  fileInputRef.current.click();
};

export const handleDragDropEvent = (event) => {
  event.preventDefault();
  return event.dataTransfer.files;
};
