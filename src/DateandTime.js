import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers({data , valueHandler , readyValue}) {

  const [value,setValue] = useState('2017-05-24T10:30')
  const classes = useStyles();
  const [ready,setReady] = useState(false)

  useEffect(() => {
    if(ready){
      valueHandler(value , 'date')
      setReady(false)
    }
    
  })

  const changeHandler = e => {

    setValue(e.target.value)
    setReady(true)
    if(!readyValue){
      data(true)
    }
    
  }


  

  return (
    <form className={classes.container} noValidate >
      <TextField
        id="datetime-local"
        label="To be Completed by..."
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={value}
        onChange={e=> {changeHandler(e)}}
      />
    </form>
  );
}

