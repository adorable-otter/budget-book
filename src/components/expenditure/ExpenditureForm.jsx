import FormInput from '../FormInput';
import useForm from '../../hooks/useForm';
import { ActionsButton, FormContent, HeaderActions, Label } from '../../styles/common';
import { closeRegisterModal } from '../../redux/slices/RegisterModalSlice';
import { unselectExpenditure } from '../../redux/slices/SelectedExpenditureSlice';
import { DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useExpenditures from '../../hooks/useExpenditures';
import dayjs from 'dayjs';
import CategoryDropdown from '../CategoryDropdown';
import useExpenditureCategories from '../../hooks/useExpenditureCategories';
import { DeleteButton, Form, Grid, HeaderTitle } from '../../styles/registerFrom';

const ExpenditureForm = () => {
  const { selectedExpenditure } = useSelector((state) => state.selectedExpenditure);
  const { authUser } = useSelector((state) => state.authUser);
  const { addExpenditure, updateExpenditure, deleteExpenditure } = useExpenditures();
  const { data: categories, isPending } = useExpenditureCategories();
  const { values, handleInputChange, resetForm, handleValueChange } = useForm(
    createInitialState(selectedExpenditure)
  );
  const dispatch = useDispatch();
  const isUpdateMode = !!selectedExpenditure.id;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateExpenditure.mutate({ ...values, user_id: authUser.id });
    } else {
      addExpenditure.mutate({ ...values, user_id: authUser.id });
    }
    dispatch(closeRegisterModal());
    resetForm();
  };

  const handleDeleteButtonClick = () => {
    deleteExpenditure.mutate(selectedExpenditure.id);
    dispatch(unselectExpenditure());
    dispatch(closeRegisterModal());
  };

  if (isPending) return null;

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
            onChange={(_, dateString) => handleValueChange('date', dateString)}
            variant="borderless"
            placeholder=""
            defaultValue={isUpdateMode ? dayjs(values.date, 'YYYY-MM-DD') : ''}
          />
        </FormContent>
        <Label>구분</Label>
        <FormContent>지출</FormContent>
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
        <FormContent>
          <CategoryDropdown
            onChange={handleValueChange}
            categories={categories}
            categoryId={values.category_id}
          />
        </FormContent>
      </Grid>
      {isUpdateMode && <DeleteButton onClick={handleDeleteButtonClick}>삭제</DeleteButton>}
    </Form>
  );
};

const createInitialState = (selectedExpenditure) => {
  const initialState = { ...selectedExpenditure };
  delete initialState.categories;
  return initialState;
};

export default ExpenditureForm;
