import { addToOrderCase } from "../constants";

const initialState = {
  orderList: {
    data: [],
    load: false,
    error: "",
  },
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case addToOrderCase.req: {
      return {
        ...state,
        orderList: {
          data: [],
          load: true,
        },
      };
    }
    case addToOrderCase.sucess: {
      const { orderItem } = action.payload;
      return {
        ...state,
        orderList: {
          data: [...state.orderList.data, orderItem],
          load: false,
        },
      };
    }
    case addToOrderCase.fail: {
      const { error } = action.payload;
      return {
        ...state,
        orderList: {
          data: [],
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
