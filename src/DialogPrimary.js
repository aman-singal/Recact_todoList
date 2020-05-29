import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {HeaderDialog} from './HeaderDialog'
import { withStyles } from '@material-ui/core';

const styles = {
  paper: {
        minHeight: '10%',
        maxHeight: '10%',
    },
};



function DialogPrimary({openStatus , openHandle}) {
  const choiceCancel = () =>{
   openHandle(false)
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
        fullWidth={true}
        
        classes={styles.dialogPaper}
      >
        <DialogTitle id="alert-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
          <HeaderDialog />
        </DialogContent>
        <DialogActions>

          <Button onClick={choiceCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default withStyles(styles)(DialogPrimary)