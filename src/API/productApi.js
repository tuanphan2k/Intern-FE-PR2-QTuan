import axiosClient from "./axiosClients";

const productApi = {
  getProductList: (params) => {
    const url = `/products`;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
