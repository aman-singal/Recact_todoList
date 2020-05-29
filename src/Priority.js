import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  export default function Priority({data , valueHandler , readyValue}) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [ready,setReady] = useState(false)


    const handleChange = (event) => {
      setValue(event.target.value);
      if(!readyValue){
        data(true)
      }
      setReady(true)
    };
  
    if(ready){
      valueHandler(value)
      setReady(false)
    }
    


    return (
      <div >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
          >
            <MenuItem value={'High'}> High</MenuItem>
            <MenuItem value={'Medium'}>Medium</MenuItem>
            <MenuItem value={'Normal'}>Normal</MenuItem>
          </Select>
        </FormControl>
        </div>
    )

}