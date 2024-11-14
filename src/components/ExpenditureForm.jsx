import styled from 'styled-components';
import FormInput from './FormInput';
import useForm from '../modules/useForm';
import { ActionsButton, Button, FormContent, HeaderActions, Label } from '../styles/common';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpenditure,
  deleteExpenditure,
  updateExpenditure,
} from '../redux/slices/ExpendituresSlice';
import { closeRegisterModal } from '../redux/slices/RegisterModalSlice';
import { unselectExpenditure } from '../redux/slices/SelectedExpenditureSlice';

const ExpenditureForm = () => {
  const { selectedExpenditure } = useSelector((state) => state.selectedExpenditure);
  const { values, handleInputChange, resetForm } = useForm(selectedExpenditure);
  const dispatch = useDispatch();
  const isUpdateMode = selectedExpenditure.id !== '';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      dispatch(updateExpenditure(values));
    } else {
      dispatch(addExpenditure(values));
    }
    dispatch(closeRegisterModal());
    resetForm();
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteExpenditure(selectedExpenditure));
    dispatch(unselectExpenditure());
    dispatch(closeRegisterModal());
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <HeaderActions>
        <ActionsButton type="button">불러오기</ActionsButton>
        <HeaderTitle>내역 입력</HeaderTitle>
        <ActionsButton type="submit">저장하기</ActionsButton>
      </HeaderActions>
      <Grid>
        <FormInput
          name={'date'}
          label={'날짜'}
          type=""
          onChange={handleInputChange}
          values={values}
        />
        <Label>구분</Label>
        <FormContent></FormContent>
        <FormInput
          name={'amount'}
          label={'금액'}
          type="number"
          onChange={handleInputChange}
          values={values}
        />
        <FormInput
          name={'name'}
          label={'사용내역'}
          type="text"
          onChange={handleInputChange}
          values={values}
        />
        <FormInput
          name={'place'}
          label={'사용장소'}
          type="text"
          onChange={handleInputChange}
          values={values}
        />
        <Label htmlFor="category">분류</Label>
        <FormContent></FormContent>
      </Grid>
      {isUpdateMode && <DeleteButton onClick={handleDeleteButtonClick}>삭제</DeleteButton>}
    </Form>
  );
};

const DeleteButton = styled(Button)`
  margin-left: auto;
  margin-right: 10px;
  margin: 0 8px 0 auto;
  color: white;
  background-color: #df3e5e;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderTitle = styled.h3``;

export default ExpenditureForm;
