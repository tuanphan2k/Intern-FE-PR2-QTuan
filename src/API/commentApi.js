import axiosClient from "./axiosClients";

const commentApi = {
  getComment: (params) => {
    const url = `/comments`;
    return axiosClient.get(url, { params });
  },

  addToComment: (data) => {
    const url = `/comments`;
    return axiosClient.post(url, data);
  },
};

export default commentApi;
