import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SubMain from './SubMain';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: 15
  },
  paper: {
    background: '#DDE1E8',
    height: '100%',
    padding: 20,
    borderRadius: '20px'
  },
  headding: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
const MainComponent = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12} sm={10}>
      <Paper elevation={0} className={classes.paper}>
        <Box className={classes.headding}>
          <Typography>Peak Saving and Alert</Typography>
          <Typography sx={{ alignSelf: 'end' }}>Carlsberg group</Typography>
        </Box>
        <hr />
        <SubMain />
      </Paper>
    </Grid>
  );
};
export default MainComponent;
