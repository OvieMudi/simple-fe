import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginAction, registerAction, reset } from '../../features/auth/authSlice';
import { DefaultButton } from '../atoms/button';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthFormTemplate = ({ children, formData, formType }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate('/products');
    }

    dispatch(reset());
  }, [isError, message, user, navigate, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      formType === 'login' ? loginAction(formData) : registerAction(formData)
    );
  };

  const buttonText = formType === 'login' ? 'Login' : 'Register';
  const buttonContent = isLoading ? <CircularProgress /> : buttonText;

  return (
    <Box component="form" flexDirection="column" className={classes.form} noValidate onSubmit={handleSubmit}>
      {children}

      <DefaultButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isLoading}
      >
        {buttonContent}
      </DefaultButton>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to={formType === 'login' ? '/register' : '/login'} variant="body2">
            {formType === 'login' ? "Don't have an account? Register" : 'Already have an account? Log in'}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthFormTemplate;
