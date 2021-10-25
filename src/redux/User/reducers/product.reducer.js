import { productCase, productItemCase } from "../constants";

const initialState = {
  productList: {
    data: [],
    load: false,
    error: "",
    total: 0,
  },

  productDetail: {
    data: {},
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
          data: [],
          load: true,
        },
      };
    }
    case productItemCase.sucess: {
      const { data, total } = action.payload;
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
    default: {
      return state;
    }
  }
}
