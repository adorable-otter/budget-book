import styled from 'styled-components';
import { Button } from './common';

export const DeleteButton = styled(Button)`
  margin-left: auto;
  margin-right: 10px;
  margin: 0 8px 0 auto;
  color: white;
  background-color: #df3e5e;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderTitle = styled.h3``;
