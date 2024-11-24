import styled from 'styled-components';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import { ActionsButton, Button, FormContent, HeaderActions, Label } from '../styles/common';
import { closeRegisterModal } from '../redux/slices/RegisterModalSlice';
import { unselectExpenditure } from '../redux/slices/SelectedExpenditureSlice';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useExpenditures from '../hooks/useExpenditures';
import dayjs from 'dayjs';

const ExpenditureForm = () => {
  const { selectedExpenditure } = useSelector((state) => state.selectedExpenditure);
  const { values, handleInputChange, resetForm, handleDateChange } = useForm(selectedExpenditure);
  const { addExpenditureMutation, updateExpenditureMutation, deleteExpenditureMutation } =
    useExpenditures();
  const dispatch = useDispatch();
  const isUpdateMode = !!selectedExpenditure.id;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateExpenditureMutation.mutate(values);
    } else {
      addExpenditureMutation.mutate(values);
    }
    dispatch(closeRegisterModal());
    resetForm();
  };

  const handleDeleteButtonClick = () => {
    deleteExpenditureMutation.mutate(selectedExpenditure.id);
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
        <Label>날짜</Label>
        <FormContent>
          <DatePicker
            onChange={(_, dateString) => handleDateChange(dateString, 'date')}
            variant="borderless"
            placeholder=""
            defaultValue={isUpdateMode ? dayjs(values.date, 'YYYY-MM-DD') : ''}
          />
        </FormContent>
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
          name={'content'}
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
