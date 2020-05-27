import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DialogBox from './DialogBox'
import TransitionAlerts from './TransitionAlerts'

function TodoList({ todos, deleteTodo }) {


const [open,setOpen] = useState(false)
const [logIndex,setLogIndex] = useState(-1)
const [alert,setAlert] = useState(false)

const dataRec = (childData)=>{
  if(childData === 'no'){
    setOpen(false)
    setLogIndex(-1)
  }
  if(childData === 'yes'){
    setOpen(false)
    deleteTodo(logIndex);
    setAlert(true)
    setLogIndex(-1)
  }
}

const deleteClickHandler = (index) =>{

  setOpen(true)
  setLogIndex(index)
}

  return (
    <div>
      <TransitionAlerts openStatus={alert}  setOpenStatus={setAlert} />
        <List >
    <DialogBox openStatus={open} choice={dataRec} 
    title="Do you really want to delete the task"
    option1="No"
    option2="Yes"
    para="Clicking on the yes will permanenetly delete the task, 
    are you sure this is what you wanna do!!?"/>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button >
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemIcon style={{position: 'absolute' , left: 555}}>
          <IconButton
            aria-label="Edit"
            onClick={() => {
              console.log('Edit Request')
            }}>
            <EditIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText primary={todo} />
        <ListItemSecondaryAction >
          <IconButton
            aria-label="Delete"
            onClick={()=>{deleteClickHandler(index)}}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>

      </ListItem>
    ))}
  </List>
    </div>
  )
}

export default TodoList
