import React, { useContext, useState , useEffect} from 'react';
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

 const TodoForms = ({data , valueHandler , readyValue}) => {
  const dispatch = useContext(Dispatch)
  const [value,setValue] = useState('')
  const classes = useStyles();
  
  const [ready,setReady] = useState(false)

  useEffect(() => {
 
      if(value.length >1 ){
        if(!readyValue){
          console.log("I was Called")
          data(true)
        }
        if(ready){
          valueHandler(value, 'title')
          setReady(false)
        }
      }
  })

  const textHandler = (e) =>{
    setValue(e.target.value)
    setReady(true)
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


export const TodoForm = React.memo(TodoForms)