import productCase from "../constants/product.constant";

const initialState = {
  productList: {
    data: [],
    load: false,
    error: "",
  },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productCase.req: {
      return {
        ...state,
        productList: {
          data: [],
          load: true,
        },
      };
    }
    case productCase.sucess: {
      const { data } = action.payload;
      return {
        ...state,
        productList: {
          data,
          load: false,
        },
      };
    }
    case productCase.fail: {
      const { error } = action.payload;
      return {
        ...state,
        productList: {
          error,
          load: false,
        },
      };
    }
    default: {
      return state;
    }
  }
}
