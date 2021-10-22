import { registerCase } from "../constants";

const initialState = {
  userInfo: {
    data: {},
    load: false,
    error: "",
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case registerCase.req: {
      return {
        ...state,
        userInfo: {
          load: true,
        },
      };
    }
    case registerCase.sucess: {
      const { data } = action.payload;
      return {
        ...state,
        userInfo: {
          data,
          load: false,
        },
      };
    }
    case registerCase.fail: {
      const { error } = action.payload;
      return {
        ...state,
        userInfo: {
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
