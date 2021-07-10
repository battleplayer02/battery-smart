import React from 'react';
import './style.css';
import Sidebar from './components/Sidebar.js';
import MainComponent from './components/MainComponent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    background: '#0D1148',
    height: '100vh',
    width: '100vw'
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Sidebar />
      <MainComponent />
    </Grid>
  );
}
