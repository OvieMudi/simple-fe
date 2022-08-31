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
  const userData = JSON.parse(localStorage.getItem('user'));
  let accessToken;

  if (userData) {
    accessToken = userData?.data?.tokens.accessToken;
    localStorage.removeItem('user');
  }
  const response = await axios.post(
    `${AUTH_URL}/logout`,
    {},
    {
      headers: {
        Authorization: accessToken ?`Bearer ${accessToken}`: undefined,
      },
    }
  );
  return response.data;
};

export { registerUser, loginUser, logoutUser };
