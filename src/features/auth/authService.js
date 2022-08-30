import createAxiosInstance from '../../util/createAxiosInstance';

const AUTH_URL = '/auth';

const axios = createAxiosInstance();

const registerUser = async (inputData) => {
  const response = await axios.post(`${AUTH_URL}/register`, inputData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (inputData) => {
  const response = await axios.post(`${AUTH_URL}/login`, inputData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = async () => {
  const response = await axios.post(`${AUTH_URL}/logout`);
  localStorage.removeItem('user');
  return response.data;
};

export { registerUser, loginUser, logoutUser };
