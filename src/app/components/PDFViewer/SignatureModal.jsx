import React, { useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const SignatureModal = ({ isOpen, onClose, onSave }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    onSave(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2>Firma Aquí</h2>
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width: 500,
            height: 200,
            className: 'sigCanvas',
            onMouseDown: (e) => e.stopPropagation(),
          }}
        />
        <div>
          <Button onClick={clear}>Borrar</Button>
          <Button onClick={save}>Guardar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignatureModal;
