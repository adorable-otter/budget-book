import LoginForm from "../components/auth/LoginForm";
import { Main, Title, Wrap } from "../styles/auth";

const Login = () => {
  return (
    <Wrap>
      <Main>
        <Title>로그인</Title>
        <LoginForm />
      </Main>
    </Wrap>
  );
};

export default Login;