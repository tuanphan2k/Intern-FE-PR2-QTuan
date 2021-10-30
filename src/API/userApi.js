import axiosClient from "./axiosClients";

const userApi = {
  getUserList: (params) => {
    const url = `/users`;
    return axiosClient.get(url, { params });
  },

  editUser: (params, data) => {
    const url = `/users/${params.id}`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
