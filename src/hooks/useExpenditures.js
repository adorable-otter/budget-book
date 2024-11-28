import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  requestAddExpenditure,
  requestDeleteExpenditure,
  requestUpdateExpenditure,
} from '../apis/expenditures';

const useExpenditures = () => {
  const queryClient = useQueryClient();

  const addExpenditure = useMutation({
    mutationFn: requestAddExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenditures']);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const updateExpenditure = useMutation({
    mutationFn: requestUpdateExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenditures']);
    },
  });

  const deleteExpenditure = useMutation({
    mutationFn: requestDeleteExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenditures']);
    },
  });

  return { addExpenditure, updateExpenditure, deleteExpenditure };
};

export default useExpenditures;
