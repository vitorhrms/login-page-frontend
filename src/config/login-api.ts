/* eslint-disable no-useless-catch */
import axios from "axios";
import { LOGIN_API } from "./env";

const loginApi = axios.create({
  baseURL: LOGIN_API,
});

export const loginClientApi = {
  checkUserPassword: async (user: string, pass: string) => {
    try {
      const params = new URLSearchParams();
      params.append("user", user);
      params.append("pass", pass);
      const response = await loginApi.post("/checkUserPassword", { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
