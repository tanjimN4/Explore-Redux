import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";
import taskReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todo: taskReducer,
    users:userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;