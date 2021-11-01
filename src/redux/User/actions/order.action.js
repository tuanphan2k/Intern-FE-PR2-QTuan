import { addToOrderCase } from "../constants";

export function addToOrderAction(params) {
  return {
    type: addToOrderCase.req,
    payload: params,
  };
}
