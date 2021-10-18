import axiosClient from "./axiosClients";

const categoryApi = {
  getCategories: (params) => {
    const url = `/categories`;
    return axiosClient.get(url, { params });
  },
};

export default categoryApi;
