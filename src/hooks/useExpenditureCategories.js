import { useQuery } from '@tanstack/react-query';
import { fetchExpenditureCategories } from '../apis/expenditures';

const useExpenditureCategories = () => {
  const query = useQuery({
    queryKey: ['categories'],
    queryFn: fetchExpenditureCategories,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  return query;
};

export default useExpenditureCategories;
