import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container   
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}>
        <Grid item xs={12} style = {{marginTop: 200}}>
          <Paper className={classes.paper}>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <AccountCircle />
                </Grid>
                <Grid item>
                    <TextField style ={{width:400}} id="input-with-icon-grid" label="Enter Email" />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <LockOpenIcon />
                </Grid>
                <Grid item>
                    <TextField style ={{width:400}} id="input-with-icon-grid" label="Enter Password" />
                </Grid>
                </Grid>
            </div>
            <Button variant="contained" color="primary" style ={{marginTop:20}}>
                Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
