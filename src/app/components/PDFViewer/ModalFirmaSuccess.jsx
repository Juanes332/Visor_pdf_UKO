import React from 'react';
import { makeStyles, Modal, Backdrop, Fade, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  successIcon: {
    color: 'green',
    fontSize: '4rem',
  },
}));

const ModalFirmaSuccess = ({ open, handleClose, navigateHome }) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <CheckCircleOutlineIcon className={classes.successIcon} />
          <h2 id="transition-modal-title">Has firmado de manera exitosa</h2>
          <Button variant="contained" color="primary" onClick={navigateHome}>
            Seguir firmando archivos
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalFirmaSuccess;
