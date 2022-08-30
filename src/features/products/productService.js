import createAxiosInstance from '../../util/createAxiosInstance';

const PRODUCTS_URL = '/products';

const axios = createAxiosInstance();

const getProducts = async (inputData) => {
  const response = await axios.get(PRODUCTS_URL, inputData);
  return response.data.data;
};

export { getProducts };
