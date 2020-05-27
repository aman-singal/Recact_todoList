import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert  from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransitionAlerts({openStatus, setOpenStatus}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={openStatus}>
        <Alert severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenStatus(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Task has been deleted
        </Alert>
      </Collapse>
    </div>
  );
}
