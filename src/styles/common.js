import styled from 'styled-components';

const ActionsButton = styled.button`
  border: none;
  border-radius: 4px;
  height: 35px;
  color: white;
  padding: 7px;
  background-color: #3e80fa;
  font-weight: bold;
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

export { ActionsButton, HeaderActions };
