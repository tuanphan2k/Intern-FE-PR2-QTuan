import productCase from "../constants/product.constant";

export function getProductListAction(params) {
  return {
    type: productCase.req,
    payload: params,
  };
}
