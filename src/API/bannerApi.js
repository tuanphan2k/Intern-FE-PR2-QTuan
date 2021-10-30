import axiosClient from "./axiosClients";

const bannerApi = {
  getBannerList: (params) => {
    const url = `/banners`;
    return axiosClient.get(url, { params });
  },
};

export default bannerApi;
