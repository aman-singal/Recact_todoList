import React, { useReducer, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';
import ButtonPri from './ButtonPri'
import FilterButton from './FilterButton'
import SortButton from './SortButton'
const shortid = require('shortid');

export const Dispatch = createContext()

const App = () => {

  const [now,setNow] = useState(false)


  const initState = {
  taskName: '',
  uid: '',
  dateCreated: '',
  expiry: '',
  priority: '',
  label: '',
  checked: false,
  progress: 0,
  milestoneNo: 0,
  milestone: []
}

  function reducer(state,action){
    switch(action.type){
      case 'title': 
      return (
        state.taskName = action.payload
      )
      case 'date':
        return (
          state.expiry = action.payload
        )
      case 'label':
        return(
          state.label = action.payload
        )
      case 'priority':
        return(
            state.priority = action.payload
        )
      case 'milestone':
        setNow(true)
        return(
              state.uid = shortid.generate(),
              state.milestoneNo = state.milestoneNo + 1,
              state.milestone.push({
              title: action.payload,
              isCompleted: false
            })   
        )
      case 'reset':
        return(
          state = initState
        )

      default:
        throw new Error();
    }
  }
  

  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const [state,dispatch] = useReducer(reducer,initState)
  if(now){
    addTodo(state)
    setNow(false)
    dispatch({type: 'reset'})
  }
 
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      

      {/* <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      /> */}
      

      
      <div>
      <div style={{marginTop: 40}}>
        <Dispatch.Provider value={dispatch}>
        <ButtonPri  />
        </Dispatch.Provider>
        <FilterButton />
        <SortButton />
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{width: '50%'}}>
      {/* <TodoList todos={todos} deleteTodo={deleteTodo} /> */}
      {/* <Priority /> */}
      </div>
      </div>
    </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);




