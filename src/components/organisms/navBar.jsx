import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Logo from '../atoms/logo';
import NavBarNavList from '../molecules/NavBarNavList';
import { useTheme } from '@mui/styles';

const NavBar = () => {
  const pages = ['Desktops', 'Notebooks', 'Gadgets'];
  const theme = useTheme();

  return (
    // <ThemeContext>
    <AppBar position="static" color='primary' theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <NavBarNavList pages={pages} />
        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeContext>
  );
};

export default NavBar;
