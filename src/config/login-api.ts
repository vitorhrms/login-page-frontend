/* eslint-disable no-useless-catch */
import axios from "axios";
import { LOGIN_API } from "./env";

const loginApi = axios.create({
  baseURL: LOGIN_API,
});

export const loginClientApi = {
  register: async (user: string, email: string, pass: string) => {
    try {
      const response = await loginApi.post("/register", { user, email, pass });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (user: string, pass: string) => {
    try {
      const response = await loginApi.post("/login", { user, pass });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  sendEmail: async (email: string) => {
    try {
      const response = await loginApi.post("/reSendEmail", { email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  verifyCode: async (code: string, email: string) => {
    try {
      const response = await loginApi.post("/verifyCode", { code, email });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
