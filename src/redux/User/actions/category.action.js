import categoryCase from "../constants/category.constant"

export function getCategoryListAction(params) {
  return {
    type: categoryCase.req,
    payload: params,
  }
}