import { combineReducers } from "redux";
import { createStore } from "redux";

import categoryReducer from "./reducers/category";
import productReducer from "./reducers/product";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
