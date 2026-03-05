import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useLoginHook from "../../hooks/useLogin";
import { useState } from "react";

export const Login = () => {
  const { postLogin, postSendEmail } = useLoginHook();
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (user && pass) {
        const response = await postLogin(user, pass);

        if (response.canLogin) {
          const sent = await postSendEmail(response.email);

          if (sent.emailSent) {
            navigate("/mfa");
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Page>
      <S.Card>
        <S.Title>Portal</S.Title>

        <S.Field>
          <S.Label>Username ou E-mail</S.Label>
          <S.Input
            type="text"
            placeholder="Digite seu Username ou E-mail"
            onChange={(e) => setUser(e.target.value)}
          />
        </S.Field>

        <S.Field>
          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
        </S.Field>

        <S.Remember>
          <input type="checkbox" />
          <span>Lembrar</span>
        </S.Remember>

        <S.Button onClick={handleClick}>Entrar</S.Button>

        <S.Forgot href="#">Esqueceu a senha?</S.Forgot>
      </S.Card>
    </S.Page>
  );
};
