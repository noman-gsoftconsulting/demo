import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import index from "../reducers/index"





const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ['auth'],
  };
  
  const persistedReducer = persistReducer(persistConfig, index);
  export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));