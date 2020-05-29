import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Dispatch} from './index'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const TodoForm = ({data , valueHandler , readyValue}) => {
  const dispatch = useContext(Dispatch)
  const [value,setValue] = useState('')
  const classes = useStyles();
  const [ready,setReady] = useState(false)

  const textHandler = (e) =>{
    setValue(e.target.value)
    setReady(true)
  }

  if(value.length >1 ){
    if(!readyValue){
      data(true)
    }
    if(ready){
      valueHandler(value)
      setReady(false)
    }
  }


  return (
    <form>
      <TextField 
      id="outlined-basic" 
      label="Title" 
      variant="outlined"
      margin="normal"
      onChange={e=> {textHandler(e)}}
      value={value}
      placeholder="Add Title"
      />

    </form>
  );
};


