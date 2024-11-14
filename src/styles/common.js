import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  width: 80px;
  height: 35px;
  color: white;
  padding: 7px;
  font-weight: bold;
  background-color: #3e80fa;
`;

const ActionsButton = styled(Button)`
  box-shadow: inset 0 0 1px;
`;

const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #5591ff;
  padding: 8px;
  height: 50px;
`;

const FormContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  border-left: 2px double crimson;
  width: 100%;
  padding-left: 10px;
`;

const Label = styled.label`
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 5px 5px 5px 15px;
`;

export { ActionsButton, HeaderActions, FormContent, Label, Button };
