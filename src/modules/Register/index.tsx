import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "phosphor-react";
import useLoginHook from "../../hooks/useLogin";
import * as S from "./styles";

export const Register = () => {
  const { postRegister } = useLoginHook();
  const [user, setUser] = useState<string>("");
  const [userError, setUserError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [passError, setPassError] = useState<boolean>(false);
  const [seePass, setSeePass] = useState<boolean>(false);
  const [seeConfirmPass, setSeeConfirmPass] = useState<boolean>(false);
  const navigate = useNavigate();

  const isValidUser = (user: string): boolean => {
    return user.length > 3;
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const passwordsMatch = (pass: string, confirmPass: string): boolean => {
    if (pass.length < 6 || confirmPass.length < 6) {
      return false;
    }
    return pass === confirmPass;
  };

  const handleClick = async () => {
    try {
      if (!isValidEmail(email)) {
        setEmailError(true);
      }

      if (!passwordsMatch(pass, confirmPass)) {
        setPassError(true);
      }

      if (!isValidUser(user)) {
        setUserError(true);
      }

      if (
        !passwordsMatch(pass, confirmPass) ||
        !isValidEmail(email) ||
        !isValidUser(user)
      ) {
        return;
      }

      const response = await postRegister(user, email, pass);
      if (response.error === "user") {
        alert("Username já utilizado");
      }

      if (response.error === "email") {
        alert("Email já utilizado");
      }

      if (response.success) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Page>
      <S.Card>
        <S.Title>Registrar</S.Title>

        <S.Field>
          <S.Label>Username</S.Label>
          <S.Input
            type="text"
            placeholder="Digite seu Username"
            onChange={(e) => {
              setUser(e.target.value);
              setUserError(false);
            }}
            error={userError}
          />
        </S.Field>

        <S.Field>
          <S.Label>E-mail</S.Label>
          <S.Input
            type="text"
            placeholder="Digite seu E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            error={emailError}
          />
        </S.Field>

        <S.Field>
          <S.Label>Senha</S.Label>
          <div style={{ position: "relative" }}>
            <S.Input
              type={seePass ? "text" : "password"}
              placeholder="••••••••"
              onChange={(e) => {
                setPass(e.target.value);
                setPassError(false);
              }}
              error={passError}
            />
            <button
              type="button"
              onClick={() => setSeePass(!seePass)}
              style={{
                position: "absolute",
                right: "10px",
                top: "55%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {seePass ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </S.Field>

        <S.Field>
          <S.Label>Confirme sua senha</S.Label>
          <div style={{ position: "relative" }}>
            <S.Input
              type={seeConfirmPass ? "text" : "password"}
              placeholder="••••••••"
              onChange={(e) => {
                setConfirmPass(e.target.value);
                setPassError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
              error={passError}
            />
            <button
              type="button"
              onClick={() => setSeeConfirmPass(!seeConfirmPass)}
              style={{
                position: "absolute",
                right: "10px",
                top: "55%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {seeConfirmPass ? <EyeSlash size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </S.Field>

        <S.Button onClick={handleClick}>Enviar</S.Button>
      </S.Card>
    </S.Page>
  );
};
