import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import LoginForm from '../organisms/loginForm';
import AuthHeader from '../molecules/AuthHeader';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
       <AuthHeader text='Login' />
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
