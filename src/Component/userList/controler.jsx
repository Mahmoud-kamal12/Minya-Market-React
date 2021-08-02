import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import DropdownBtn from './dropdownbtn'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const handleClickSearsh = () => {
    
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={6} container justifyContent="center">
            <form className={classes.root} noValidate autoComplete="off">
            <Input
                id="standard-adornment-weight" 
                placeholder= "Enter ID"
                onClick={handleClickSearsh}
            />
                <Button size="small" className={classes.margin} variant="outlined" color="primary">Ok</Button>
            </form>
        </Grid>
        <Grid item xs={6}>
            <DropdownBtn/>
        </Grid>
      </Grid>
    </div>
  );
}
