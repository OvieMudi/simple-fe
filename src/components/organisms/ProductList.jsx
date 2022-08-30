import { Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductItem from '../molecules/ProductItem';

const ProductList = ({ items }) => {

  return (
    <>
      <Typography variant='h4'>Products</Typography>
      <Divider />
      <Grid container spacing={4} py={3}>
        {items?.map((item) => (
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            <ProductItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
