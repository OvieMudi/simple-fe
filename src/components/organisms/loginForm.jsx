import { useState } from 'react';
import ValidationTextField from '../atoms/textField';
import AuthFormTemplate from '../templates/AuthFormTemplate';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <AuthFormTemplate formType="login" formData={formData}>
      <ValidationTextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleChange}
      />
      <ValidationTextField
        variant="outlined"
        margin="normal"
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
    </AuthFormTemplate>
  );
};

export default LoginForm;
