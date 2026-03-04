/* eslint-disable no-useless-catch */
import axios from "axios";
import { LOGIN_API } from "./env";

const loginApi = axios.create({
  baseURL: LOGIN_API,
});

export const loginClientApi = {
  login: async (user: string, pass: string) => {
    try {
      const params = new URLSearchParams();
      params.append("user", user);
      params.append("pass", pass);
      const response = await loginApi.post("/login", { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  sendEmail: async (email: string) => {
    try {
      const params = new URLSearchParams();
      params.append("email", email);
      const response = await loginApi.post("/sendEmail", { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  verifyCode: async (code: string) => {
    try {
      const params = new URLSearchParams();
      params.append("code", code);
      const response = await loginApi.post("/verifyCode", { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
