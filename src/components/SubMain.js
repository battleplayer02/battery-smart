import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ApexChart from './ApexChart';
import FormComp from './FormComp';
import EditRowModelControlGrid from './EditRowModelControlGrid';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    background: '',
    boxSizing: 'border-box',
    paddingBottom: 20
  },
  graph: {
    marginTop: 20,
    height: '35%',
    borderRadius: 10
  },
  half: {
    overflow: 'auto',
    height: theme.spacing(50)
  },
  graphInside: {
    borderRadius: 10,
    height: '100%'
  },
  paperL: {
    borderRadius: 10,
    height: '90%',
    marginLeft: 10,
    marginTop: 10
  },
  paperR: {
    padding: 15,
    borderRadius: 10,
    height: '90%',
    marginRight: 10,
    marginTop: 10
  }
}));

export default function SubMain() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.graph}>
        <Paper elevation={0} className={classes.graphInside}>
          <ApexChart />
        </Paper>
      </Grid>
      <Grid item xs={5} className={classes.half}>
        <Paper elevation={0} className={classes.paperR}>
          <FormComp />
        </Paper>
      </Grid>
      <Grid item xs={7} className={classes.half}>
        <Paper elevation={0} className={classes.paperL}>
          <EditRowModelControlGrid />
        </Paper>
      </Grid>
    </Grid>
  );
}
