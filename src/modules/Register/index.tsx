import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useLoginHook from "../../hooks/useLogin";
import { useState } from "react";

export const Register = () => {
  const { postLogin } = useLoginHook();
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [pass, setPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [passError, setPassError] = useState<boolean>(false);
  const navigate = useNavigate();

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
        return;
      }

      alert("Tudo válido!");
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
            onChange={(e) => setUser(e.target.value)}
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
          <S.Input
            type="password"
            placeholder="••••••••"
            onChange={(e) => {
              setPass(e.target.value);
              setPassError(false);
            }}
            error={passError}
          />
        </S.Field>

        <S.Field>
          <S.Label>Confirme sua senha</S.Label>
          <S.Input
            type="password"
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
        </S.Field>

        <S.Button onClick={handleClick}>Enviar</S.Button>
      </S.Card>
    </S.Page>
  );
};
