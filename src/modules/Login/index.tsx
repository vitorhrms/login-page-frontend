import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useLoginHook from "../../hooks/useLogin";
import { useState } from "react";

export const Login = () => {
  const { postLogin } = useLoginHook();
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (user && pass) {
        // TODO: add loading
        const response = await postLogin(user, pass);

        if (response.canLogin) {
          navigate("/mfa");
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

        <S.Forgot href="#" onClick={() => navigate("/register")}>
          Registrar
        </S.Forgot>
      </S.Card>
    </S.Page>
  );
};
