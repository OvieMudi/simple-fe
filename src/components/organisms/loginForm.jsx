import { makeStyles } from '@mui/styles';
import ValidationTextField from '../atoms/textField';
import DefaultButton from '../atoms/button';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FormTemplate from '../templates/FormTemplate';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <FormTemplate>
      <ValidationTextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
      />
      <ValidationTextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <DefaultButton type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
        Log in
      </DefaultButton>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to="/register" variant="body2">
            {"Don't have an account? Register"}
          </Link>
        </Grid>
      </Grid>
    </FormTemplate>
  );
};

export default LoginForm;
