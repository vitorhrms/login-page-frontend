import { EnvelopeSimple } from "phosphor-react";
import * as S from "./styles";

export const MFA = () => {
  return (
    <S.Page>
      <S.Card>
        <EnvelopeSimple size={38} weight="bold" />
        <S.Title>VERIFICAÇÃO EM DUAS ETAPAS</S.Title>

        <S.Label style={{ marginBottom: "30px" }}>
          Enviamos um código de verificação para o seu e-mail.
        </S.Label>
        <S.Field>
          <S.Label>Informe o código enviado para o seu email:</S.Label>
          <S.Input type="text" />
        </S.Field>

        <S.Button>Verificar</S.Button>

        <S.Resend>
          Não recebeu o código?<S.Forgot href="#">Reenviar</S.Forgot>
        </S.Resend>
      </S.Card>
    </S.Page>
  );
};
