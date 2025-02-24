import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { profileReducer } from "./profile/slice";
import { routerReducer } from "./router/slice";
import { fundReducer } from "./fund/slice";


const logger = createLogger();

const reducers = combineReducers({
  profileReducer,
  routerReducer,
  fundReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
