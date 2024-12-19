import { useQuery } from '@tanstack/react-query';
import { fetchMonthlyMainStatistic } from '../apis/budget';
import { useSelector } from 'react-redux';

const useTotalAmounts = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { selectedYearMonth } = useSelector((state) => state.selectedYearMonth);

  const { data, isPending, isError, yearMonth } = useQuery({
    queryKey: ['totalAmounts', selectedYearMonth.format('YYYY-MM')],
    queryFn: () =>
      fetchMonthlyMainStatistic({
        userId: authUser.id,
        year: selectedYearMonth.format('YYYY'),
        month: selectedYearMonth.format('MM'),
      }),
  });

  return { data, isPending, isError, yearMonth };
};

export default useTotalAmounts;
