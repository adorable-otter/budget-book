import styled from 'styled-components';
import { FormContent, Label } from '../styles/common';

const FormInput = ({ name, type, label, onChange, values }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <FormContent>
        <Input onChange={onChange} type={type} name={name} value={values[name]} />
      </FormContent>
    </>
  );
};

const Input = styled.input`
  border: none;
  width: 100%;
  caret-color: #15cbadbd;

  &::-webkit-inner-spin-actionsbutton {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-actionsbutton {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

export default FormInput;
