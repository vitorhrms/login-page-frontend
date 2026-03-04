import { loginClientApi } from "../config/login-api";
import { IS_LOCAL } from "../config/env";
import { users } from "../utils/users";

interface IResponse {
  canLogin: boolean;
  email: string;
}

const checkUserPassword = async (
  user: string,
  pass: string,
): Promise<IResponse> => {
  if (IS_LOCAL) {
    const foundUser = users.find(
      (u) => (u.user === user || u.email === user) && u.pass === pass,
    );

    return { canLogin: !!foundUser, email: foundUser?.email || "" };
  } else {
    const response = await loginClientApi.checkUserPassword(user, pass);
    return response;
  }
};

const useCheckUserPassword = () => {
  const getInfo = async (user: string, pass: string) => {
    try {
      const response = await checkUserPassword(user, pass);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return { getInfo };
};

export default useCheckUserPassword;
