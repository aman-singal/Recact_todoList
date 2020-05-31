import React  , {useState , useContext} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {TodoForm} from './TodoForm'
import Priority from './Priority';
import DateandTime from './DateandTime'
import Label from './Label'
import Milestone from './Milestone'
import {Dispatch} from './index'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(10),
    },
  }),
);


function getSteps() {
  return ['Add Task Title','Add Deadline' ,'Set Priority', 'Add Label' , "Add MileStone"];
}


export function HeaderDialog({openHandle}) {

  const [ready , setReady] = useState(false)

  const readyFunction = (item) =>{
    setReady((initValue)=>{
      return( item)
    })
  }

  const {value} = useContext(Dispatch)
  const [sendValue,setSendValue] = useState('')

  const [dispatch,lastStep,setLastStep] = value

  function dispatchValue (childData, childData2){
    console.log(childData2)
    dispatch({type: {childData2} , payload: {childData}})
  }

  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <TodoForm  data={readyFunction} valueHandler={dispatchValue} readyValue={ready} />
        )
      case 1:
        return (
          <DateandTime  data={readyFunction} valueHandler={dispatchValue} readyValue={ready}/>
        )
      case 2:
          return (
            <Priority  data={readyFunction} valueHandler={dispatchValue} readyValue={ready}/>
          )
      case 3:
        return (
          <Label  data={readyFunction} valueHandler={dispatchValue} readyValue={ready}/>
        )
        case 4:
          return (
            <Milestone  data={readyFunction} valueHandler={dispatchValue} readyValue={ready}/>
          )
      default:
        return 'Unknown stepIndex';
    }
  
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  

  const handleNext = () => {
    if(ready){

      setReady(false)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
           
    }else{
      console.log("Forward NOT POSSIBLE")
    }
    
  };

  const handleFinish = () =>{
    if(ready){
        setLastStep(true)
        debugger
        console.log("Close Initating...")
        openHandle(false)
    }else{
      console.log("Forward NOT POSSIBLE")
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.instructions}>
             All steps completed
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className={classes.instructions}>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? 
                <Button variant="contained" color="primary" onClick={handleFinish}>
              Finish
              </Button>
              :
              <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
              }
              
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
