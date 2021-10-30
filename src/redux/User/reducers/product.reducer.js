import { deleteItemCase, productCase, productItemCase } from "../constants";

const initialState = {
  productList: {
    data: [],
    load: false,
    error: "",
    total: 0,
  },

  productDetail: {
    data: {},
    load: true,
    error: "",
  },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case productCase.req: {
      return {
        ...state,
        productList: {
          ...state.productList,
          data: [],
          load: true,
        },
      };
    }
    case productCase.sucess: {
      const { data, total } = action.payload;
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
    case productItemCase.req: {
      return {
        ...state,
        productDetail: {
          data: {},
          load: true,
        },
      };
    }
    case productItemCase.sucess: {
      const { data } = action.payload;
      return {
        ...state,
        productDetail: {
          data,
          load: false,
        },
      };
    }
    case productItemCase.fail: {
      const { error } = action.payload;
      return {
        ...state,
        productDetail: {
          error,
          load: false,
        },
      };
    }
    case deleteItemCase.req: {
      return {
        ...state,
        productList: {
          ...state.productList,
          load: true,
        },
      };
    }
    case deleteItemCase.sucess: {
      const { data } = action.payload;
      console.log("🚀 ~ file: product.reducer.js ~ line 91 ~ productReducer ~ data", data)

      const newProductList = state.productList.data;
      const productIndex = newProductList.findIndex((item) => item.id === data);
      newProductList.splice(productIndex, 1);

      return {
        ...state,
        productList: {
          ...state.productList,
          data: newProductList,
          load: false,
        },
      };
    }
    case deleteItemCase.fail: {
      const { error } = action.payload;
      return {
        ...state,
        productList: {
          ...state.productList,
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
