import React from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, Radio, Select } from 'final-form-material-ui';
import {
  Grid,
  Button,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core'
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function FormComp() {
  const classes = useStyles();

  return (
    <>
    <Typography>Create Alert</Typography>
    <Form
      onSubmit={}
      initialValues={{ employed: true, stooge: 'larry' }}
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="flex-start">
              <Grid item xs={12}>
                <Field
                
                size="small"
                  fullWidth
                  required
                  name="firstName"
                  component={TextField}
                  type="text"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                
                size="small"
                  name="email"
                  fullWidth
                  required
                  component={TextField}
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                
                size="small"
                  name="number"
                  fullWidth
                  required
                  component={TextField}
                  type="number"
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                
                size="small"
                  name="value"
                  fullWidth
                  required
                  component={TextField}
                  type="number"
                  label="Value"
                />
              </Grid>

              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Criteria</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      label="Greater"
                      size="small"
                      control={
                        <Field
                        size="small"
                          name="stooge"
                          component={Radio}
                          type="radio"
                          value="greater"
                        />
                      }
                    />
                    <FormControlLabel
                      label="Lesser"
                      size="small"
                      control={
                        <Field
                          size="small"
                          name="stooge"
                          component={Radio}
                          type="radio"
                          value="lesser"
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Field
                  
                  size="small"
                  fullWidth
                  name="day"
                  component={Select}
                  label="Days"
                  type="select"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="mon">Monday</MenuItem>
                  <MenuItem value="tue">Tuesday</MenuItem>
                  <MenuItem value="wed">Wednesday</MenuItem>
                  <MenuItem value="thu">Thursday</MenuItem>
                  <MenuItem value="fri">Friday</MenuItem>
                  <MenuItem value="sat">Saryrday</MenuItem>
                  <MenuItem value="sun">Sunday</MenuItem>
                </Field>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
        </form>
      )}
    />
    </>
  )
                    }
                    