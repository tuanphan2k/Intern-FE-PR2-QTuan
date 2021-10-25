import { productCase, productItemCase } from "../constants";

export function getProductListAction(params) {
  return {
    type: productCase.req,
    payload: params,
  };
}

export function getProductItem(params) {
  return {
    type: productItemCase.req,
    payload: params,
  };
}
