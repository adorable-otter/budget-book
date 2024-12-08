import { fetchExpenditures } from '../../apis/expenditures';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ExpenditureRow from './ExpenditureRow';

const ExpenditureList = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const { selectedYearMonth } = useSelector((state) => state.selectedYearMonth);
  const {
    data: expenditures,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['expenditures', selectedYearMonth.format('YYYY-MM'), authUser.id],
    queryFn: () =>
      fetchExpenditures(
        authUser.id,
        selectedYearMonth.format('YYYY-MM-01'),
        selectedYearMonth.add(1, 'month').format('YYYY-MM-01')
      ),
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Wrap>
      {expenditures.map((data) => (
        <ExpenditureRow key={data.id} data={data} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  border-bottom: none;
`;

export default ExpenditureList;
