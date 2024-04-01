import { combineReducers, createStore, applyMiddleware } from "redux";
import accountReducer from "./Features/Accounts/AccountSlice";
import customerReducer from "./Features/Customers/CustomerSlice";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
