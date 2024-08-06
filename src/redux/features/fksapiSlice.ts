import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fakestoreapi.com";

export const getFakeProducts = createAsyncThunk("product/getFakeProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error?.response?.data?.message || error?.message || error);
    } else return null;
  }
});

export const getFakeProductById = createAsyncThunk(
  "product/getFakeProductById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/products/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error?.response?.data?.message || error?.message || error);
      } else return null;
    }
  }
);

export interface InitialProduct {
  id: string;
  title: string;
  price: string;
  image: string;
  url: string;
}

export interface InitialSingleProduct extends InitialProduct {
  rating: { rate: string; count: string };
  description: string;
}

const fksapiSlice = createSlice({
  name: "fakestoreApi",
  initialState: {
    products: [],
    singleProduct: null,
    status: "idle",
    error: null as string | null | unknown,
    singleStatus: "idle",
    singleError: null as string | null | unknown,
  },
  reducers: {
    emptyDataId(state) {
      state.singleProduct = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFakeProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFakeProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getFakeProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getFakeProductById.pending, (state) => {
        state.singleStatus = "loading";
      })
      .addCase(getFakeProductById.fulfilled, (state, action) => {
        state.singleStatus = "succeeded";
        state.singleProduct = action.payload;
      })
      .addCase(getFakeProductById.rejected, (state, action) => {
        state.singleStatus = "failed";
        state.singleError = action.payload;
      });
  },
});

export const { emptyDataId } = fksapiSlice.actions;
export default fksapiSlice.reducer;
