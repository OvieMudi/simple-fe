import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductItem = ({ id, name, discountRate, image }) => {
  return (
    <Card className="animate__animated animate__fadeIn" variant="outlined">
      <CardActionArea>
        <CardMedia component="img" height={260} image={image} alt={id}/>
        <CardContent>
          <Typography variant="subtitle1" color="button" noWrap>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }} color="secondary">
        <Typography variant="subtitle2" color="text.secondary" align="right">
          {`${discountRate}%`} Discount
        </Typography>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
