import { useState } from 'react';
import ValidationTextField from '../atoms/textField';
import { Grid } from '@mui/material';
import AuthFormTemplate from '../templates/AuthFormTemplate';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AuthFormTemplate formData={formData} formType="register">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ValidationTextField
            autoComplete="username"
            name="username"
            variant="outlined"
            required
            fullWidth
            id="username"
            label="Username"
            autoFocus
            value={username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <ValidationTextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <ValidationTextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </AuthFormTemplate>
  );
};

export default RegisterForm;
