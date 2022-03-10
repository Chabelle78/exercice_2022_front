import axios from "axios";
// @ts-ignore
const API_URL = "http://localhost:3000/api";

export const wilder = {
  getAll: () => axios.get(`${API_URL}/wilders`).then((res) => res.data),
};
