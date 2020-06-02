import React , {useContext , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {Dispatch} from './index'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList({ todos,uid}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const {value} = useContext(Dispatch) 
  const [dispatch2,todo] = value

  const listItem = todos.map((item) => {
    
    const labelId = `checkbox-list-label-${item.title}`;
    return (
      <ListItem key={item.title}  onClick={e => handleToggle(e , item.title)} role={undefined} dense button >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.isCompleted}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
          
          
          {console.log(item.isCompleted)}
        </ListItemIcon>
        <ListItemText id={labelId} primary={item.title} />
      </ListItem>
    );
  })

  const handleToggle = (e,title) => {
    e.preventDefault();
    console.log("prod")
    debugger
    dispatch2({type : 'milestone-comps' , payload: title , uid: uid })
    console.log("Payload Dispatched")
    setChecked(!checked)
    
  };

  return (
    <List className={classes.root}>
      
      {listItem}
    </List>
  );
}
