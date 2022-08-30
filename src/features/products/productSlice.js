import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from './productService';

const initialState = {
  items: null,
  isError: false,
  isLoading: false,
  message: '',
};

export const getProductsAction = createAsyncThunk('products.getAll', async (thunkAPI) => {
  try {
    return await getProducts();
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
});


export const productSlice = createSlice({
  name: 'products',
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
    .addCase(getProductsAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getProductsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.items = action.payload;
    })
    .addCase(getProductsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.items = null;
    })
  },
});

export const { reset } = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;
