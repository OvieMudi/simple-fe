import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import RegisterForm from '../organisms/registerForm';
import AuthHeader from '../molecules/AuthHeader';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <AuthHeader text='Register' />
        <RegisterForm />
      </div>
    </Container>
  );
}
