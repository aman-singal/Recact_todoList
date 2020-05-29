import React  ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogPrimary from './DialogPrimary'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();
  const [open,setOpen] = useState(false)

  const clickHandler = () =>{
    setOpen(true)
  }

  const dataRec = (data) =>{
    console.log(data)
  }

  return (
    <div>
      <DialogPrimary openStatus={open} openHandle={setOpen} />
        <div onClick={clickHandler}>
          <Button variant="outlined" size="large" color="primary" className={classes.margin} style={{width: 600}}>
            Click to Create A New task
          </Button>
        </div>
    </div>

  );
}
