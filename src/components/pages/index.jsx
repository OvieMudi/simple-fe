import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { orange, blue,  } from '@mui/material/colors';
import LoginPage from './login';
import ProductsPage from './products';
import RegisterPage from './register';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const Pages = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" exact element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default Pages;
