import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { fetchBudgetByYearMonth, requestAddBudget, requestUpdateBudget } from '../apis/budget';
import { useSelector } from 'react-redux';

const useBudget = () => {
  const queryClient = useQueryClient();
  const { authUser } = useSelector((state) => state.authUser);
  const { selectedYearMonth } = useSelector((state) => state.selectedYearMonth);

  const { data, isPending, isError } = useQuery({
    queryKey: ['budget', selectedYearMonth.format('YYYY-MM')],
    queryFn: () => {
      return fetchBudgetByYearMonth({
        userId: authUser.id,
        year: selectedYearMonth.year(),
        month: selectedYearMonth.month() + 1,
      });
    },
    staleTime: 1000 * 60 * 5,
  });

  const addBudget = useMutation({
    mutationFn: requestAddBudget,
    onSuccess: () => {
      toast.success('예산을 등록했습니다!');
      queryClient.invalidateQueries('budget');
    },
  });

  const updateBudget = useMutation({
    mutationFn: requestUpdateBudget,
    onSuccess: () => {
      toast.success('예산을 수정했습니다!');
      queryClient.invalidateQueries('budget');
    },
    onError: (error) => {
      console.log("🚀 ~ useBudget ~ error:", error)
      toast.error('예산 수정을 실패했습니다!');
    },
  });

  const yearMonth = selectedYearMonth.format('YYYY-MM');

  return { data, isPending, isError, addBudget, updateBudget, yearMonth };
};

export default useBudget;
