import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';

const DefaultButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[400]),
  backgroundColor: orange[400],
  '&:hover': {
    backgroundColor: orange[600],
  },
  margin: theme.spacing(3, 0, 2)
}));

export default DefaultButton;
