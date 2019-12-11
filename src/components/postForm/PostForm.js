import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button'
import {Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import exercises from './options'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root:{
    height: '100%',
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    boxSizing: 'border-box',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(6),
      // marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  fieldContainer: {
    width: 'auto',
    margin: 'auto'
  },

  field: {
    width: '90%',
    margin: '2% auto',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));

const PostForm = (props) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };


  return (
    <Dialog className={classes.root} aria-labelledby="simple-dialog-title"onClose={handleClose} open={open}>
      {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Create Post
          </Typography>
        {/* <FormControl className={classes.fieldContainer}> */}
        <TextField fullWidth label="Title" className={classes.field} name='title'></TextField>
        <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <YouTubeIcon />
            </InputAdornment>
          ),
        }} fullWidth label="Video" className={classes.field} name='video'></TextField>
        <FormControl className={classes.field} >
          <InputLabel ref={inputLabel}>
            Exercise
        </InputLabel>
          <Select
            labelWidth='10'
            label='Exercise'
            native
            onChange={(e) => { console.log(e.target) }}
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            {exercises.map(exercise => <option value={exercise.id}>{exercise.name}</option>)}
          </Select>
        </FormControl>
        <TextField
          className={classes.field}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="6"
          helperText="Please explain in as much detail as possible what you feel when performing this exercise and any other relevant information"
        />
        <Button className={classes.field} variant="contained" color="primary">SUBMIT</Button>
      </Paper>
    </Dialog>
  );
};

export default PostForm;