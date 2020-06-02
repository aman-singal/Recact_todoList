import React, { useState , useEffect} from 'react';
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
  const [currentMile,setCurrentMile] = useState('')

  useEffect(() => {
    if(ready){
      valueHandler(milestone , 'milestone')
      setReady(false)
    }
  })

  const addHandler = () =>{

    setMilestone([...milestone , value])
    setCurrentMile(value)
    console.log(milestone)
    
    setValue('')

    if(!readyValue){
      data(true)
    }
    setReady(true)
  }

  const deleteMilestone = todoIndex => {
    const newMilestone = milestone.filter((_, index) => index !== todoIndex);
    setMilestone(newMilestone)
    setReady(true)
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
