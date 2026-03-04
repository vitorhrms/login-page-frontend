import * as S from "./styles";

export const Login = () => {
  return (
    <S.Page>
      <S.Card>
        <S.Title>LOGIN TO SYSTEM</S.Title>

        <S.Field>
          <S.Label>Username</S.Label>
          <S.Input type="text" placeholder="Enter your username" />
        </S.Field>

        <S.Field>
          <S.Label>Password</S.Label>
          <S.Input type="password" placeholder="••••••••" />
        </S.Field>

        <S.Remember>
          <input type="checkbox" />
          <span>Remember me</span>
        </S.Remember>

        <S.Button>LOG IN</S.Button>

        <S.Forgot href="#">Forgot password?</S.Forgot>
      </S.Card>
    </S.Page>
  );
};
