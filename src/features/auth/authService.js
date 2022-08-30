import axios from 'axios';

const AUTH_BASE_URL = 'http://localhost:3100/api/auth';

const registerUser = async (inputData) => {
  const response = await axios.post(`${AUTH_BASE_URL}/register`, inputData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (inputData) => {
  const response = await axios.post(`${AUTH_BASE_URL}/login`, inputData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = async () => {
  localStorage.removeItem('user');
  const response = await axios.post(`${AUTH_BASE_URL}/logout`);
  console.log('logoutUser ~ response', response);

  // if ([200, 204].includes(response.status)) {
  //   localStorage.removeItem('user');
  // }
  return response.data;
};

export { registerUser, loginUser, logoutUser };
