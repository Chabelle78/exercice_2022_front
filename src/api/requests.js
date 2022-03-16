import axios from "axios";
// @ts-ignore
const API_URL = "http://localhost:3000/api";

export const wilder = {
  getAll: () => axios.get(`${API_URL}/wilders`).then((res) => res.data),
  create: (newUser) =>
    axios
      .post(`${API_URL}/wilder/create`, {
        name: newUser.name,
        city: newUser.city,
      })
      .then((res) => res.data),
  getOne: (id) => axios.get(`${API_URL}/wilder/${id}`).then((res) => res.data),
  update: (id, update) =>
    axios
      .put(`${API_URL}/wilder/update/${id}`, {
        name: update.name,
        city: update.city,
      })
      .then((res) => res.data),
  delete: (id) =>
    axios.delete(`${API_URL}/wilder/delete/${id}`).then((res) => res.data),
};
