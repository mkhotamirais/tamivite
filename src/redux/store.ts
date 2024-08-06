import { configureStore } from "@reduxjs/toolkit";

import todoReducer, { InitialTodo } from "./features/todoSlice";
import fksapiReducer, { getFakeProducts, InitialProduct, InitialSingleProduct } from "./features/fksapiSlice";
import newsapiReducer, { getNews, NewsQuery, NewsValues } from "./features/newsapiSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    fksapi: fksapiReducer,
    newsapi: newsapiReducer,
  },
});

export interface RootState {
  todo: {
    todo: InitialTodo[];
    isEdit: string | null;
    checkedAll: boolean;
  };
}

export interface RootFksapi {
  fksapi: {
    products: InitialProduct[] | null;
    singleProduct: InitialSingleProduct | null;
    status: "idle" | "loading" | "failed" | "succeeded";
    error: string | null | unknown;
    singleStatus: "idle" | "loading" | "failed" | "succeeded";
    singleError: string | null | unknown;
  };
}

export interface RootNews {
  newsapi: {
    status: "idle" | "loading" | "failed" | "succeeded";
    news: NewsValues[] | null;
    error: string | null | unknown;
    top: string;
    q: string;
    query: NewsQuery;
  };
}

export type AppDispatch = typeof store.dispatch;

store.dispatch(getFakeProducts());
store.dispatch(getNews({ top: "everything", queryObj: { q: "" } }));
// store.dispatch(getSiskoProducts());
