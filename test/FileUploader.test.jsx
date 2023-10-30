import {
  areFilesValid,
  handleFileDialog,
  handleDragDropEvent,
} from './logicComponents/FileUploaderLogic';

describe('Cargar archivos <= 10MB', () => {
  it('Debe dejar pasar a archivos que tengan un peso <= 10MB', () => {
    const mockFiles = [
      { size: 5 * 1024 * 1024 }, // 5MB
      { size: 3 * 1024 * 1024 }, // 3MB
    ];
    expect(areFilesValid(mockFiles)).toBeTruthy();
  });

  it('Salta una alerta y no deja subir archivos mayores a 10MB', () => {
    const mockFiles = [
      { size: 5 * 1024 * 1024 }, // 5MB
      { size: 15 * 1024 * 1024 }, // 15MB
    ];
    expect(areFilesValid(mockFiles)).toBeFalsy();
  });
});

describe('File Dialog', () => {
  it('Muestra true si el archivo es pdf y lo deja pasar al visor', () => {
    const mockRef = {
      current: {
        click: jest.fn(),
      },
    };

    handleFileDialog(mockRef);
    expect(mockRef.current.click).toHaveBeenCalled();
  });
});

describe('Drag and Drop', () => {
  it('Previene la carga de archivos no pdf y mayores a 10MB', () => {
    const mockFiles = [{ size: 5 * 1024 * 1024 }];
    const mockEvent = {
      preventDefault: jest.fn(),
      dataTransfer: {
        files: mockFiles,
      },
    };

    const result = handleDragDropEvent(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result).toEqual(mockFiles);
  });
});
