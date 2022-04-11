/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import { Wilder } from "../types";
// @ts-ignore
const API_URL = "http://localhost:3000/api";
const API_RUGBY = "https://api-rugby.p.rapidapi.com/leagues";
var options = {
  headers: {
    "x-rapidapi-host": "api-rugby.p.rapidapi.com",
    "x-rapidapi-key": "67f146500amsh5181c60594a4bd3p1a8088jsn2f5864686f44",
  },
};

export const wilder = {
  getAll: (): Promise<Wilder[]> =>
    axios.get(`${API_URL}/wilders`).then((res) => { console.log(res.data.result) ;return res.data.result}),

  create: (newUser: Wilder): Promise<Wilder> =>
    axios
      .post(`${API_URL}/wilder/create`, {
        name: newUser.name,
        city: newUser.city,
        description: newUser.description,
        skills: newUser.skills,
      })
      .then((res) => res.data),

  getOne: (id: string) =>
    axios.get(`${API_URL}/wilder/find/${id}`).then((res) => {
      return res.data;
    }),

  update: ({ id, update }: { id: string; update: Wilder }): Promise<Wilder> =>
    axios
      .put(`${API_URL}/wilder/update/${id}`, {
        name: update.name,
        city: update.city,
        description: update.description,
        skill: update.skills,
      })
      .then((res) => res.data),

  delete: (id: string) =>
    axios.delete(`${API_URL}/wilder/delete/${id}`).then((res) => res.data),

  getRugbyLeague: () =>
    axios
      .get(`${API_RUGBY}`, {
        headers: {
          "x-rapidapi-host": "api-rugby.p.rapidapi.com",
          "x-rapidapi-key":
            "67f146500amsh5181c60594a4bd3p1a8088jsn2f5864686f44",
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      }),
};
