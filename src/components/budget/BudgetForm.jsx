import { closeRegisterModal } from '../../redux/slices/RegisterModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Grid, HeaderTitle } from '../../styles/registerFrom';
import { ActionsButton, FormContent, HeaderActions, Label } from '../../styles/common';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import FormInput from '../FormInput';
import useForm from '../../hooks/useForm';
import useBudget from '../../hooks/useBudget';

const initialState = {
  amount: 0,
  date: dayjs().format('YYYY-MM'),
};

const BudgetForm = () => {
  const { values, handleInputChange, resetForm, handleValueChange } = useForm(initialState);
  const { authUser } = useSelector((state) => state.authUser);
  const { addBudget } = useBudget();
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addBudget.mutate(createBudget(values));
    dispatch(closeRegisterModal());
    resetForm();
  };

  const createBudget = (values) => {
    const [year, month] = values.date.split('-');
    return {
      user_id: authUser.id,
      year,
      month,
      amount: values.amount,
    };
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <HeaderActions>
        <ActionsButton type="button">불러오기</ActionsButton>
        <HeaderTitle>내역 입력</HeaderTitle>
        <ActionsButton type="submit">저장하기</ActionsButton>
      </HeaderActions>
      <Grid>
        <Label>연/월</Label>
        <FormContent>
          <DatePicker
            onChange={(_, dateString) => handleValueChange('date', dateString)}
            variant="borderless"
            placeholder=""
            picker="month"
            defaultValue={dayjs(values.date, 'YYYY-MM')}
          />
        </FormContent>
        <Label>구분</Label>
        <FormContent>예산</FormContent>
        <FormInput
          name={'amount'}
          label={'금액'}
          type="number"
          onChange={handleInputChange}
          values={values}
        />
      </Grid>
    </Form>
  );
};

export default BudgetForm;
