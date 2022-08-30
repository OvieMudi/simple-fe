import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const Logo = () => (
  <Avatar
    component={Link}
    to='/'
    src='../assets/img/logo.png'
    alt='ProductsLogo'
    loading='lazy'
    variant='rounded'
  />
);

export default Logo;