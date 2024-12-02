import SignUpForm from '../components/auth/SignUpForm';
import { Main, Title, Wrap } from '../styles/auth';

const SignUp = () => {
  return (
    <Wrap>
      <Main>
        <Title>회원가입</Title>
        <SignUpForm />
      </Main>
    </Wrap>
  );
};

export default SignUp;
