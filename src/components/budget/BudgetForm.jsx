import { closeRegisterModal } from '../../redux/slices/RegisterModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Grid, HeaderTitle } from '../../styles/registerFrom';
import { ActionsButton, FormContent, HeaderActions, Label } from '../../styles/common';
import FormInput from '../FormInput';
import useForm from '../../hooks/useForm';
import useBudget from '../../hooks/useBudget';
import { useEffect } from 'react';

const BudgetForm = () => {
  const { data: budget, isPending, isError, addBudget, updateBudget, yearMonth } = useBudget();
  const { authUser } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const { values, handleInputChange, resetForm, setValues } = useForm({
    amount: 0,
    date: yearMonth,
  });

  useEffect(() => {
    if (budget) {
      setValues({
        amount: budget.amount,
        date: yearMonth,
      });
    }
  }, [budget]);

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error</div>;

  const isUpdateMode = !!budget;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateBudget.mutate(createBudget({ ...budget, ...values }, isUpdateMode));
    } else {
      addBudget.mutate(createBudget(values));
    }
    dispatch(closeRegisterModal());
    resetForm();
  };

  const createBudget = (values, isUpdateMode = false) => {
    const [year, month] = values.date.split('-');
    const budget = {
      user_id: authUser.id,
      year,
      month,
      amount: values.amount,
    };
    if (isUpdateMode) {
      budget.id = values.id;
    }
    return budget;
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
          label={'연월'}
          type="text"
          onChange={handleInputChange}
          values={values}
          inputReadOnly={true}
        />
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
