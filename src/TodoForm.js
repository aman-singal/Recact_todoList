import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();
  const classes = useStyles();


  const clickHandler = () =>{
    saveTodo(value)
    reset()
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <div className={classes.root}>
        <Fab color="primary" aria-label="add" onClick={clickHandler}>
          <AddIcon />
        </Fab>
      </div>

    </form>
  );
};

export default TodoForm;
