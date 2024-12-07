import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { requestAddBudget } from '../apis/budget';

const useBudget = () => {
  const queryClient = useQueryClient();

  const addBudget = useMutation({
    mutationFn: requestAddBudget,
    onSuccess: () => {
      toast.success('예산을 등록했습니다!');
      queryClient.invalidateQueries('budget');
    },
  });

  return { addBudget };
};

export default useBudget;
