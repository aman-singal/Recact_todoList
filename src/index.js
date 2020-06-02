import React, { useReducer, useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import ButtonPri from './ButtonPri'
import FilterButton from './FilterButton'
import SortButton from './SortButton'
import ExpandList from './ExpandList'

const shortid = require('shortid');
export const Dispatch = createContext()

const App = () => {

let initTodo = [{  taskName: 'Task 1',
  uid: 'Task1',
  dateCreated: '',
  expiry: '',
  priority: 'High',
  label: 'work',
  checked: false,
  progress: 0,
  milestoneNo: 1,
  milestone: [
    {
      title: 'dsdfdsf',
      isCompleted: false
    }
  ]},
  {  taskName: 'Task 2',
  uid: 'Task2',
  dateCreated: '',
  expiry: '',
  priority: 'Normal',
  label: 'personal',
  checked: false,
  progress: 0,
  milestoneNo: 1,
  milestone: []},
  ]
  
  const [now,setNow] = useState(false)
  const [lastStep, setLastStep] = useState(false)
  const [milestoneFinalState , setMilestoneFinalState] = useState(false)

function reducer2(state,action){
  debugger
  console.log(`Type is ${action.type} Payload is: ${action.payload}`)
  switch(action.type){
    case 'add':
      var newState = [...state,action.payload]
    return (newState)

    case 'milestone-comps':
      let index = state.findIndex(item => action.uid === item.uid)
      var newState = state
      var newState1 = state
      for(var i = 0 ; i < newState1[index].milestone.length ; i++){
        if(newState1[index].milestone[i].title === action.payload){
          newState1[index].milestone[i].isCompleted = !newState1[index].milestone[i].isCompleted
        }
      }
      let j =0
      for(var i = 0 ; i < newState1[index].milestone.length ; i++){
        if(newState1[index].milestone.isCompleted === true){
          j++
        }
      }
      if(j +1 === newState1[index].milestone.length ){
        newState1[index].checked = !newState1[index].checked
      }
      debugger
    return (newState1)

    case 'task-comp':
       index = state.findIndex(item => action.uid === item.uid)
       newState = state
       newState[index].checked = !state[index].checked
      return (newState)

    default:
      throw new Error("Error in 2nd Reducer")
  }
}
const [todo,dispatch2] = useReducer(reducer2,initTodo)

  useEffect(() => {
    if(now && lastStep){
      
      setNow(false)
      setLastStep(false)

      dispatch2({type: 'add' , payload: stateHandler})
      console.log("FINAL STATE IS PUSHING")
      
      dispatch({type: 'reset'})
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
  milestone: [],
}

  function reducer(state,action){

    let newState = state

    console.log(`Action Type: ${action.type} and the Payload is ${action.payload}`)

    switch(action.type){
      case 'title': 
          newState.taskName = action.payload
          return (newState)

      case 'date':
        newState.expiry = action.payload
        return (newState)

      case 'label':
        newState.label = action.payload
        return (newState)

      case 'priority':   
        newState.priority = action.payload
        return (newState)

      case 'milestone':
        setNow(true)
        
        if(state.uid === ''){
          newState.uid = shortid.generate()
        }
        
        newState.milestoneNo = action.payload.length

        newState.milestone =  action.payload.map(item =>{
          return (
            {
              title: item,
              isCompleted: false,
            }
          )
        })
        
        return (newState)

      case 'reset':
        return (initState)

      default:
        debugger
        throw new Error("Some Shit Gone Wrong, Please Check It Buddy");
    }
  }
  

  
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
      <Dispatch.Provider value={{value: [dispatch2,todo]}}>
      <ExpandList todos={todo} />
      </Dispatch.Provider>
      </div>
      </div>
    </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);