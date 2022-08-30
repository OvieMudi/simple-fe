import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../features/auth/authSlice';
import { LOGIN_URL } from '../../routes/routes';
import { NavButton } from '../atoms/button';

export function NavBarNavList({ pages }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(LOGIN_URL);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Box sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          {pages.map((page) => (
            <NavButton
              key={page}
              onClick={() => {}}
              type="NavButton"
            >
              {page}
            </NavButton>
          ))}
        </Box>

        {user && (
          <div>
            <NavButton
              onClick={handleLogout}
            >
              Logout
            </NavButton>
          </div>
        )}
      </Toolbar>
    </Box>
  );
}

export default NavBarNavList;
