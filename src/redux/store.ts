import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./features/todoSlice";
// import omdbapiReducer from "./features/omdbapiSlice";
// import jpReducer, { getPosts, getUsers } from "./features/jpSlice";
// import siskoReducer, { getSiskoProducts } from "./features/siskoSlice";
// import newsapiReducer from "./features/newsapiSlice";
// import fksapiReducer, { getFakeProducts } from "./features/fksapiSlice";

// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//     // public api
//     omdbapi: omdbapiReducer,
//     jp: jpReducer,
//     fksapi: fksapiReducer,
//     sisko: siskoReducer,
//     newsapi: newsapiReducer,
//   },
// });

// store.dispatch(getUsers());
// store.dispatch(getPosts());
// store.dispatch(getFakeProducts());
// store.dispatch(getSiskoProducts());
