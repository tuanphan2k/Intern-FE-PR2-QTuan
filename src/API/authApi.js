import axiosClient from "./axiosClients";

const authApi = {
  register: (data) => {
    const url = `/register/`;
    return axiosClient.post(url, { ...data });
  },

  login: (data) => {
    const url = `/login/`;
    return axiosClient.post(url, data);
  },

  updateUser: (params, data) => {
    const url = `/600/users/${params.id}`;
    return axiosClient.patch(url, data, {
      headers: { Authorization: `Bearer ${params.accessToken}` },
    });
  },
};

export default authApi;
