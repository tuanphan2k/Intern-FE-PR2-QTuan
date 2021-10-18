import productCase from "../constants/product.constant";

const initialState = {
  productList: {
    data: [],
    load: false,
    error: "",
    total: 0,
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
      const { data,total } = action.payload;
      return {
        ...state,
        productList: {
          data,
          total,
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
