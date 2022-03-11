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
};

console.log(wilder.getAll());
export const bernard = axios.get(`${API_URL}/wilders`);
