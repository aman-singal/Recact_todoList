import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TodoList from './TodoList'
const shortid = require('shortid');



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

export default function FloatingActionButtons({data , valueHandler , readyValue}) {

  let id = shortid.generate()
  const [value,setValue] = useState('')
  const [ready,setReady] = useState(false)

  const addHandler = () =>{

    setMilestone([...milestone , {
      title: {value},
      unique: {id}
    }])
    console.log(milestone)
    debugger
    setValue('')

    if(!readyValue){
      data(true)
    }
    setReady(true)
  }

  if(ready){
    valueHandler(value)
    setReady(false)
  }

  const deleteMilestone = (uid) =>{
    const newMile = milestone.map((item)=>{
      return item.uid !== uid
    })
    setMilestone(newMile)
  }

  const classes = useStyles();
  const [milestone,setMilestone] = useState([])
  return (
    
    <div style={{flexDirection: 'column'}}>
        <div style={{display: 'inline'}}>
            <Grid container spacing={1} alignItems="flex-end" >

            <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" value={value} onChange={e => setValue(e.target.value)} />
            </Grid>
            </Grid>

        </div>
        <div className={classes.root} style={{display: 'inline'}}>
        <Fab size="small" color="secondary" aria-label="add">
            <AddIcon onClick={addHandler} />
        </Fab>
        </div>

        
        <TodoList todos={milestone} deleteTodo={deleteMilestone} />
          
     
    </div>
  );
}
