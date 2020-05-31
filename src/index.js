import React, { useReducer, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import ButtonPri from './ButtonPri'
import FilterButton from './FilterButton'
import SortButton from './SortButton'
const shortid = require('shortid');

export const Dispatch = createContext()

const App = () => {

  const [now,setNow] = useState(false)
  const [lastStep, setLastStep] = useState(false)

  useEffect(() => {
    if(now && lastStep){
      setTodo(stateHandler)
      console.log("FINAL STATE IS PUSHING")
      console.log(stateHandler)
      setNow(false)
      dispatch({type: 'reset'})
      setLastStep(false)
    }
  })
  var initState = {
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

    

    switch(action.type.childData2){
      case 'title': 
        console.log(state)
          var newState = state
          newState.taskName = action.payload.childData
          return (newState)

      case 'date':
        console.log(state)
        var newState = state
        newState.expiry = action.payload.childData
        return (newState)

      case 'label':
        console.log(state)
        var newState = state
        newState.label = action.payload.childData
        return (newState)

      case 'priority':
        console.log(state)
        var newState = state
        newState.priority = action.payload.childData
        return (newState)

      case 'milestone':
        console.log(state)
        setNow(true)
        var newState = state
        
        if(state.uid === ''){
          newState.uid = shortid.generate()
        }
        
        newState.milestoneNo = newState.milestoneNo + 1

        newState.milestone =  action.payload.childData.map(item =>{
          return (
            {
              title: item,
              isCompleted: false,
            }
          )
        })

        
        return (newState)

      case 'reset':
        return(initState)

      default:
        throw new Error("Some Shit Gone Wrong, Please Check It Buddy");
    }
  }
  

  const [todo,setTodo] = useState([])
  const [stateHandler,dispatch] = useReducer(reducer,initState)
  
 
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <div>
      <div style={{marginTop: 40}}>
        <Dispatch.Provider value={{value: [dispatch,lastStep,setLastStep]}}>
        <ButtonPri  />
        </Dispatch.Provider>
        <FilterButton />
        <SortButton />
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{width: '50%'}}>
      {/* <TodoList todos={todos} deleteTodo={deleteTodo} /> */}

      </div>
      </div>
    </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);