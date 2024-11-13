import styled from 'styled-components';
import FormInput from './FormInput';
import useForm from '../modules/useForm';
import { ActionsButton, FormContent, HeaderActions, Label } from '../styles/common';
import { useDispatch } from 'react-redux';
import { addExpenditure } from '../redux/slices/ExpendituresSlice';
import { closeRegisterModal } from '../redux/slices/RegisterModalSlice';

const initialValues = {
  date: '',
  amount: 0,
  name: '',
  place: '',
  category: '',
  categoryName: '미분류',
};

const ExpenditureForm = () => {
  const { values, handleInputChange, resetForm } = useForm(initialValues);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpenditure(values));
    resetForm();
    dispatch(closeRegisterModal());
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <HeaderActions>
        <ActionsButton>불러오기</ActionsButton>
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
        <Label htmlFor="ex">구분</Label>
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
    </Form>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const HeaderTitle = styled.h3``;

export default ExpenditureForm;
