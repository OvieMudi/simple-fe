import { makeStyles } from '@mui/styles';
import ValidationTextField from '../atoms/textField';
import DefaultButton from '../atoms/button';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FormTemplate from '../templates/FormTemplate';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <FormTemplate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ValidationTextField
            autoComplete="username"
            name="username"
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <ValidationTextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <ValidationTextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <DefaultButton type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        Register
      </DefaultButton>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to="/login" variant="body2">
            Already have an account? Log in
          </Link>
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default RegisterForm;
