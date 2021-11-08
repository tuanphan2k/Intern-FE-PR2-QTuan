import axiosClient from "./axiosClients";

const orderApi = {
  addToOrder: (data) => {
    const url = `/orders`;
    return axiosClient.post(url, data);
  },
  getOrderList: (params) => {
    const url = `/orders`;
    return axiosClient.get(url, { params });
  },
  reviewOrder: (id, data) => {
    const url = `/orders/${id}`;
    return axiosClient.patch(url, data);
  },
};

export default orderApi;
