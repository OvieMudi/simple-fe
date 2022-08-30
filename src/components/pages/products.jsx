import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import ItemListTemplate from '../templates/ItemListTemplate';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    minHeight: '100vh'
  },
}));

const ProductsPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={ classes.paper} >
        <ItemListTemplate />
    </Container>
  );
};

export default ProductsPage;
