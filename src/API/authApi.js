import axiosClient from "./axiosClients";

const authApi = {
  register: (data) => {
    const url = `/users`;
    return axiosClient.post(url, { ...data });
  },
};

export default authApi;
