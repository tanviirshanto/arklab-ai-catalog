// lib/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "./slices/agentsSlice";
import filtersReducer from "./slices/filtersSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
  reducer: {
    agents: agentsReducer,
    filters: filtersReducer,
    user: userReducer,

  },
});

// ✅ Add this:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
