import styled from 'styled-components';

const InputWithErrorMessage = ({ inputData, register, error }) => {
  const { type, placeholder } = inputData;

  return (
    <Wrap>
      <Input type={type} placeholder={placeholder} {...register} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-size: 0.6rem;
  color: tomato;
  margin-top: 5px;
  padding-left: 5px;
  height: 0.6rem;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 8px;
  height: 30px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export default InputWithErrorMessage;
