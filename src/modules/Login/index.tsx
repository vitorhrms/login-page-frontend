import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useCheckUserPassword from "../../hooks/useLogin";
import { useState } from "react";

export const Login = () => {
  const { getInfo } = useCheckUserPassword();
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (user && pass) {
      const teste = await getInfo(user, pass);
      console.log(teste);
      // navigate("/mfa");
    }
  };

  return (
    <S.Page>
      <S.Card>
        <S.Title>LOGIN TO SYSTEM</S.Title>

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
