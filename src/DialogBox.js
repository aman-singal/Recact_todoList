import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({openStatus , choice,title,option1,option2,para }) {
  const choiceNo = () =>{
    choice('no')
  }

  const choiceYes = () =>{
    choice('yes')
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openStatus}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {para}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={choiceNo} color="primary">
            {option1}
          </Button>
          <Button onClick={choiceYes} color="primary" autoFocus>
            {option2}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
