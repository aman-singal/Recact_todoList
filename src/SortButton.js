import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}  style={{display: 'inline'}}>

      <Button variant="outlined" size="large" color="secondary" style={{display: 'inline', width: 292}} >
        Sort
      </Button>

    </div>
  );
}
