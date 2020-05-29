import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{display: 'inline'}}>
      <Button size="large" variant="outlined" style={{display: 'inline', width: 292}} >Filter</Button>
    </div>
  );
}