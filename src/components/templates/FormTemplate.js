import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const FormTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <Box
      component="form"
      flexDirection="column"
      className={classes.form}
      noValidate
      onSubmit={(e) => e.preventDefault()}
    >
      {children}
    </Box>
  );
};

export default FormTemplate;
