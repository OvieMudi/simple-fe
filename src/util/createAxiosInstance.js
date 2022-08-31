import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const baseURL = 'https://keeneye-be.herokuapp.com/api';

const createAxiosInstance = () => {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const { accessToken, refreshToken } = localUser?.data?.tokens || {};

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!accessToken) return req;

    const user = jwt_decode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(
      `${baseURL}/auth/refresh`,
      {},
      { headers: { Authorization: `Bearer ${refreshToken}` } }
    );

    const tokens = response.data.data;

    localUser.data.tokens = tokens;

    localStorage.setItem('user', JSON.stringify(localUser));

    req.headers.Authorization = `Bearer ${tokens.accessToken}`;
    return req;
  });

  return axiosInstance;
};

export default createAxiosInstance;
