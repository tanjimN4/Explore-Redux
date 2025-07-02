import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";
import taskReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todo: taskReducer,
    users:userSlice,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware : (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(baseApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger)
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;