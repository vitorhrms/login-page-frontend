import { EnvelopeSimple } from "phosphor-react";
import * as S from "./styles";
import useLoginHook from "../../hooks/useLogin";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuthHook";
import { useNavigate } from "react-router-dom";

export const MFA = () => {
  const { postSendEmail, postVerifyCode } = useLoginHook();
  const { email } = useAuth();
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();

  const handleResend = async () => {
    try {
      if (email) {
        await postSendEmail(email);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleVerifyCode = async () => {
    try {
      if (email) {
        const response = await postVerifyCode(code, email);
        if (response.canAccess) {
          navigate("/mainpage");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Page>
      {email ? (
        <S.Card>
          <EnvelopeSimple size={38} weight="bold" />
          <S.Title>VERIFICAÇÃO EM DUAS ETAPAS</S.Title>

          <S.Label style={{ marginBottom: "30px" }}>
            Enviamos um código de verificação para o seu e-mail.
          </S.Label>
          <S.Field>
            <S.Label>Informe o código enviado para o seu email:</S.Label>
            <S.Input
              type="text"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleVerifyCode();
                }
              }}
            />
          </S.Field>

          <S.Button onClick={handleVerifyCode}>Verificar</S.Button>

          <S.Resend>
            Não recebeu o código?
            <S.Forgot onClick={handleResend}>Reenviar</S.Forgot>
          </S.Resend>
        </S.Card>
      ) : (
        ""
      )}
    </S.Page>
  );
};
