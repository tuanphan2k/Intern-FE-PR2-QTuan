import axiosClient from "./axiosClients";

const productApi = {
  getProductList: (params) => {
    const url = `/products`;
    return axiosClient.get(url, { params });
  },

  getProductItem: (id) => {
    const url = `/products/${id}?_embed=colorOptions&&_embed=sizeOptions&&_expand=category`;
    return axiosClient.get(url, {});
  },
};

export default productApi;
