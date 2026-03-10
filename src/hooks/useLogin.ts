import { loginClientApi } from "../config/login-api";
import { useAuth } from "./useAuthHook";

interface ILogin {
  canLogin: boolean;
  email: string;
  id: number | string;
}
interface IRegister {
  success: boolean;
  error?: string;
  msg?: string;
}
interface IEmailSent {
  emailSent: boolean;
}

interface ICodeSent {
  canAccess: boolean;
}

const checkUserPassword = async (
  user: string,
  pass: string,
): Promise<ILogin> => {
  const response = await loginClientApi.login(user, pass);
  return response.data;
};

const registerUser = async (
  user: string,
  email: string,
  pass: string,
): Promise<IRegister> => {
  const response = await loginClientApi.register(user, email, pass);
  return response.data;
};

const sendEmail = async (email: string): Promise<IEmailSent> => {
  const response = await loginClientApi.sendEmail(email);
  return response.data;
};

const verifyCode = async (code: string, email: string): Promise<ICodeSent> => {
  const response = await loginClientApi.verifyCode(code, email);
  return response.data;
};

const useLoginHook = () => {
  const { setEmail } = useAuth();

  const postRegister = async (user: string, email: string, pass: string) => {
    try {
      const response = await registerUser(user, email, pass);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  const postLogin = async (user: string, pass: string) => {
    try {
      const response = await checkUserPassword(user, pass);
      setEmail(response.email);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  const postSendEmail = async (email: string) => {
    try {
      const response = await sendEmail(email);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  const postVerifyCode = async (code: string, email: string) => {
    try {
      const response = await verifyCode(code, email);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return { postRegister, postLogin, postSendEmail, postVerifyCode };
};

export default useLoginHook;
