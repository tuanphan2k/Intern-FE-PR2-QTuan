import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import bannerReducer from "./banner.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";

export default combineReducers({
  categoryReducer,
  bannerReducer,
  productReducer,
  authReducer,
  cartReducer,
});
