import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartslice";

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
