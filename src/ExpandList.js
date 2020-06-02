import React, { useEffect , useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TodoMile from './TodoMile'
import {Dispatch} from './index'
import BlackJSX from './BlankJSX'
import {Typography} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ActionsInExpansionPanelSummary({todos}) {
  const classes =  useStyles();
  const {value} = useContext(Dispatch)
  const [dispatch2,todo,milestoneFinalState] = value

  const listItem = todo.map(item =>
    <li key={item.uid} style={{listStyle: 'none' , marginTop: 2}}>
      
      <ExpansionPanel >
      <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-label="Expand"
      aria-controls="additional-actions1-content"
      id="additional-actions1-header"
      >
      
      <FormControlLabel
      aria-label="Acknowledge"
      onClick={(event) => event.stopPropagation()}
      onFocus={(event) => event.stopPropagation()}
      control={item.milestone.length > 0? <BlackJSX /> : <Checkbox />}
      label={item.taskName}
      disabled={item.checked}
      />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <div color="textSecondary" style={{width: '100%'}}>
        <Typography style={{color: 'grey' ,}}>The Task Due Date is: {item.expiry}</Typography>
        <Typography style={{color: 'red' ,}} >The Task Has priority: {item.priority}</Typography>
        <Typography style={{color: 'orange' ,}} >The Task Has Label: {item.label}</Typography>
        
      <TodoMile todos={item.milestone} uid={item.uid} />
      </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    </li>
  )

  return (
    <div className={classes.root} style={{marginTop: 100}}>
      {listItem}
    </div>
  );
}
