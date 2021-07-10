import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  paper: {
    height: '100%'
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: 10,
    marginTop: 10
  },
  headding: {
    margin: '20px 30px'
  },
  avSize: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  borderBottom: {
    borderBottom: 'white 1px solid'
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2} className={classes.root}>
      <Box className={classes.headding}>
        <Typography
          variant={'h5'}
          align="center"
          className={classes.borderBottom}
        >
          Grid Manager 2.0
        </Typography>
      </Box>
      <Box sx={{ mb: 5, mx: 2.5, display: 'flex', justifyContent: 'center' }}>
        <Box className={classes.account}>
          <Avatar alt="photoURL" className={classes.avSize} />
          <Box sx={{ ml: 2 }}>
            <Typography variant={'subtitle1'}>{'Hey, Json'}</Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {'User Id: AB-3'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>E3 - Apps</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Box>1</Box>
        <Box>
          <PowerSettingsNewIcon />
          Logout
        </Box>
      </Box>
    </Grid>
  );
}
