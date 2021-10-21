import axiosClient from "./axiosClients";

const categoryApi = {
  getBannerList: (params) => {
    const url = `/banners`;
    return axiosClient.get(url, { params });
  },
};

export default categoryApi;
