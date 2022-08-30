import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user,
  isError: false,
  isLoading: false,
  message: '',
};

export const registerAction = createAsyncThunk('auth.register', async (userData, thunkAPI) => {
  try {
    return await registerUser(userData);
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const loginAction = createAsyncThunk('auth.login', async (userData, thunkAPI) => {
  try {
    return await loginUser(userData);
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logoutAction = createAsyncThunk('auth.logout', async (_, thunkAPI) => {
  try {
    return await logoutUser();
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(registerAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    })
    .addCase(registerAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })
    .addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })
    .addCase(logoutAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logoutAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    })
    .addCase(logoutAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    })
  },
});

export const { reset } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
