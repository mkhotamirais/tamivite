import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { format } from "date-fns";
const url = "https://newsapi.org/v2";
const apiKey = "9c6131f2202d4dafb822bc76564f80c4";
// const date = format(new Date() - 60 * 24 * 24 * 1000, "yyyy-mm-dd");
const datePrev = new Date();
const adjustedDate = new Date(datePrev.getTime() - 60 * 24 * 60 * 1000); // Convert to timestamp, subtract, and convert back to Date
const date = format(adjustedDate, "yyyy-MM-dd");

export interface NewsValues {
  url: string;
  urlToImage: string;
  description: string;
  title: string;
  publishedAt: string;
  author: string;
  content: string;
}
export interface NewsQuery {
  top: string;
  queryObj: {
    q?: string; // q is optional
  };
}

export const getNews = createAsyncThunk("news/getNews", async (data: NewsQuery, { rejectWithValue }) => {
  try {
    const top = data?.top ? data.top : "everything";
    const query = {
      ...data.queryObj,
      q: data.queryObj?.q || "jokowi",
    };

    const queryString = Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const response = await axios.get(`${url}/${top}?${queryString}&from=${date}&pageSize=10&apiKey=${apiKey}`);
    return response?.data?.articles;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error?.response?.data?.message || error?.message || error);
    } else {
      return null;
    }
  }
});

const newsapiSlice = createSlice({
  name: "newsapi",
  initialState: {
    status: "idle",
    news: null,
    error: null as string | null | unknown,
    top: "",
    query: {},
    q: "",
  },
  reducers: {
    setTop(state, action) {
      state.top = action.payload;
    },
    setQuery(state, action) {
      state.query = { ...state.query, ...action.payload };
    },
    setQ(state, action) {
      state.q = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setTop, setQuery, setQ } = newsapiSlice.actions;
export default newsapiSlice.reducer;
