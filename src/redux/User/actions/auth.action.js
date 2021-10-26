import { registerCase } from "../constants";

export function registerAction(params) {
  console.log("🚀 ~ file: auth.action.js ~ line 4 ~ registerAction ~ params", params)
  return {
    type: registerCase.req,
    payload: params,
  };
}
