import axiosClient from "./axiosClients";

const orderApi = {
  addToOrder: (data) => {
    const url = `/orders`;
    return axiosClient.post(url, { ...data });
  },
};

export default orderApi;
