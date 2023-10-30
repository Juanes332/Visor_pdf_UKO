import * as Logic from './logicComponents/PdfViewerLogic';

describe('Lógica de PdfViewer', () => {
  it('debería inicializar con valores por defecto', () => {
    expect(Logic.initialState.selectedFiles).toEqual([]);
    expect(Logic.initialState.showFileUploader).toBe(true);
    expect(Logic.initialState.pageNumber).toBe(1);
  });

  it('debería manejar la selección de archivos', () => {
    const mockFiles = [
      {
        name: 'documento1.pdf',
        size: 1024,
        type: 'application/pdf',
      },
    ];

    const newState = Logic.handleFilesSelected(Logic.initialState, mockFiles);

    expect(newState.selectedFiles).toEqual(mockFiles);
    expect(newState.showFileUploader).toBe(false);
  });

  it('debería cambiar de página correctamente', () => {
    const initialState = {
      ...Logic.initialState,
      numPages: [3],
    };

    const nextState = Logic.handleNextPage(initialState);

    expect(nextState.pageNumber).toBe(2);
  });

  // Continúa con otras pruebas según lo consideres necesario
});
