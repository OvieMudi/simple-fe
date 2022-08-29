import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { blue, red } from '@mui/material/colors';



const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: blue[600],
  },
  '& input:invalid + fieldset': {
    borderColor: red[100],
  },
});

export default ValidationTextField;

