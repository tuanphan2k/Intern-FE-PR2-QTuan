import axiosClient from "./axiosClients";

const productApi = {
  getProductList: (params) => {
    const url = `/products?_embed=colorOptions&&_embed=sizeOptions&&_expand=category`;
    return axiosClient.get(url, { params });
  },

  getProductItem: (id) => {
    const url = `/products/${id}?_embed=colorOptions&&_embed=sizeOptions&&_expand=category`;
    return axiosClient.get(url, {});
  },
  deleteProductItem: (id) => {
    const url = `products/${id}`;
    return axiosClient.delete(url, {});
  },
  editProductItem: (id, data) => {
    const url = `products/${id}`;
    return axiosClient.patch(url, data);
  },
  addProduct: (data) => {
    const url = `/products`;
    return axiosClient.post(url, data);
  },
};

export default productApi;
