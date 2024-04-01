import { composeWithDevTools } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Features/Accounts/AccountSlice";
import customerReducer from "./Features/Customers/CustomerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
