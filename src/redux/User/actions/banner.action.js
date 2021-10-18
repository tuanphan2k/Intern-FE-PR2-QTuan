import bannerCase from "../constants/banner.constant";

export function getBannerListAction(params) {
  return {
    type: bannerCase.req,
    payload: params,
  };
}
