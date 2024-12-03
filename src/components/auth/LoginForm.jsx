import { toast } from 'react-toastify';
import { Form, Input, SubmitButton } from '../../styles/auth';
import useAuth from '../../hooks/auth/useAuth';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { values, handleInputChange } = useForm(initialValues);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(values);
      toast.success('로그인에 성공했습니다.');
      navigate('/');
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      if (error.code === 'invalid_credentials') {
        toast.error('유효하지 않은 로그인 정보입니다.');
      } else {
        toast.error('로그인에 실패했습니다.');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="이메일"
        name="email"
        value={values['email']}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        name="password"
        value={values['password']}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">로그인</SubmitButton>
    </Form>
  );
};

export default LoginForm;
