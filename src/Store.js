import { combineReducers, createStore, applyMiddleware } from "redux";
import accountReducer from "./Features/Accounts/AccountSlice";
import customerReducer from "./Features/Customers/CustomerSlice";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
