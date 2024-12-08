import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { Main, Title, Wrap } from '../styles/auth';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrap>
      <Main>
        <Title>로그인</Title>
        <LoginForm />
        <JoinMessage>
          아직 회원이 아니신가요? <Link to="/sign-up">회원가입</Link>
        </JoinMessage>
      </Main>
    </Wrap>
  );
};

const JoinMessage = styled.div`
  padding-left: 20px;
`;

export default Login;
