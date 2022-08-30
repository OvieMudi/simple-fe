import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getProductsAction } from '../../features/products/productSlice';
import LoadingSpinner from '../atoms/spinner';
import ProductList from '../organisms/ProductList';

const ItemListTemplate = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products) || {};
  const auth = useSelector((state) => state.auth) || {};

  const { user } = auth;
  console.log('ItemListTemplate ~ user', user);

  const { items, isLoading, isError, message } = products;

  const productsCallback = useCallback(() => {
    if (user?.data) {
      dispatch(getProductsAction());
    }
  }, [user.data, dispatch]);

  useEffect(() => {
    productsCallback();

    if (isError) {
      toast.error(message);
    }
  }, [isError, message, productsCallback]);

  return isLoading ? <LoadingSpinner text="Fetching products..." /> : <ProductList items={items} />;
};
export default ItemListTemplate;
