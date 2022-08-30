import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { orange, blue } from '@mui/material/colors';
import { ThemeProvider } from '@mui/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './login';
import ProductsPage from './products';
import RegisterPage from './register';
import PrivateRoute from '../../routes/privateRoute';
import { LOGIN_URL, PRODUCTS_URL, REGISTER_URL } from '../../routes/routes';
import NavBar from '../organisms/navBar';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: blue[500]
    },
  },
});

const Pages = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path={PRODUCTS_URL} element={<ProductsPage />} />
        </Route>
        <Route path={LOGIN_URL} exact element={<LoginPage />} />
        <Route exact path={REGISTER_URL} element={<RegisterPage />} />
        <Route path="*" element={<Navigate to={LOGIN_URL} replace />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Pages;
