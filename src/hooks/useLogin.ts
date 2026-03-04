import { loginClientApi } from "../config/login-api";
import { useAuth } from "./useAuthHook";

interface ILogin {
  canLogin: boolean;
  email: string;
  id: number | string;
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
  return response;
};

const sendEmail = async (email: string): Promise<IEmailSent> => {
  const response = await loginClientApi.sendEmail(email);
  return response;
};

const verifyCode = async (code: string): Promise<ICodeSent> => {
  const response = await loginClientApi.verifyCode(code);
  return response;
};

const useLoginHook = () => {
  const { setEmail } = useAuth();
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

  const postVerifyCode = async (code: string) => {
    try {
      const response = await verifyCode(code);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return { postLogin, postSendEmail, postVerifyCode };
};

export default useLoginHook;
