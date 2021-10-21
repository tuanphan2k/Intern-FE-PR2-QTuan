import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import bannerReducer from "./banner.reducer";
import productReducer from "./product.reducer";

export default combineReducers({
  categoryReducer,
  bannerReducer,
  productReducer,
});
