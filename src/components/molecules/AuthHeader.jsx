import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const AuthHeader = ({ text }) => {
  const classes = useStyles();

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </>
  );
};

AuthHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AuthHeader;
