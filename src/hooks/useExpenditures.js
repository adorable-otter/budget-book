import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  requestAddExpenditure,
  requestDeleteExpenditure,
  requestUpdateExpenditure,
} from '../apis/expenditures';
import { toast } from 'react-toastify';

const useExpenditures = () => {
  const queryClient = useQueryClient();

  const addExpenditure = useMutation({
    mutationFn: requestAddExpenditure,
    onSuccess: () => {
      toast.success('지출 내역을 등록했습니다!');
      queryClient.invalidateQueries(['expenditures']);
    },
    onError: (err) => {
      toast.error('지출 내역 등록을 실패했습니다!');
      console.log(err);
    },
  });

  const updateExpenditure = useMutation({
    mutationFn: requestUpdateExpenditure,
    onSuccess: () => {
      toast.success('지출 내역을 수정했습니다!');
      queryClient.invalidateQueries(['expenditures']);
    },
    onError: () => {
      toast.error('지출 내역 수정을 실패했습니다!');
    },
  });

  const deleteExpenditure = useMutation({
    mutationFn: requestDeleteExpenditure,
    onSuccess: () => {
      toast.success('지출 내역을 삭제했습니다!');
      queryClient.invalidateQueries(['expenditures']);
    },
    onError: () => {
      toast.error('지출 내역 삭제를 실패했습니다!');
    },
  });

  return { addExpenditure, updateExpenditure, deleteExpenditure };
};

export default useExpenditures;
