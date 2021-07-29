import { combineReducers } from "redux";
import { createStore } from "redux";

import categoryReducer from "./reducers/category";
import productReducer from "./reducers/product";
import cartReducer from "./reducers/cart";
import buyerReducer from "./reducers/buyer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
  buyer: buyerReducer,
});

export const store = createStore(rootReducer);
