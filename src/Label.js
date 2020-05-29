import React , {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function RadioButtonsGroup({data , valueHandler , readyValue}) {
  const [value, setValue] = React.useState('');
  const [label,setLabel] = useState(["work" , 'home'  , 'personal'])
  const [change,setChange] = useState('')
  const [ready,setReady] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
    if(!readyValue){
      data(true)
    }
    setReady(true)
  };

  const addHandler = () =>{
      let newLabel = label
      newLabel = [...label , change]
      setLabel(newLabel)
      setValue(change)
      setReady(true)
      setChange('')
      if(!readyValue){
        data(true)
      }
  }

  if(ready){
    valueHandler(value)
    setReady(false)
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label</FormLabel>
      <RadioGroup aria-label="Label" name="Label" value={value} onChange={handleChange}>

          {label.map((item)=>(
              <FormControlLabel value={item} key={item} control={<Radio />} label={item} />
        ))}
        <TextField onChange={e=> {setChange(e.target.value)}} value={change} id="standard-basic" label="Standard" style={{display: 'inline' , marginBottom: 20, marginTop: 20}} />
        <Button variant="contained" onClick={addHandler}>Add New Label</Button>
        
      </RadioGroup>
    </FormControl>
  );
}
