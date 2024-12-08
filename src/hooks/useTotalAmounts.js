import { useQuery } from '@tanstack/react-query';
import { fetchTotalAmountsByMonth } from '../apis/budget';
import { useSelector } from 'react-redux';

const useTotalAmounts = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { selectedYearMonth } = useSelector((state) => state.selectedYearMonth);

  const { data, isPending, isError, yearMonth } = useQuery({
    queryKey: ['totalAmounts', selectedYearMonth.format('YYYY-MM')],
    queryFn: () =>
      fetchTotalAmountsByMonth({
        userId: authUser.id,
        startDate: selectedYearMonth.format('YYYY-MM-01'),
        endDate: selectedYearMonth.add(1, 'month').format('YYYY-MM-01'),
      }),
  });

  return { data, isPending, isError, yearMonth };
};

export default useTotalAmounts;
