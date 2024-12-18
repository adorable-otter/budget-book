import { fetchExpenditures } from '../../apis/expenditures';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ExpenditureRow from './ExpenditureRow';
import DateRow from '../DateRow';

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

  const createRows = () => {
    let date = '';
    return expenditures.reduce((acc, expenditure) => {
      if (date !== expenditure.date) {
        date = expenditure.date;
        acc.push(<DateRow date={date} />);
      }
      acc.push(<ExpenditureRow key={expenditure.id} data={expenditure} />);
      return acc;
    }, []);
  };

  return (
    <Wrap>
      {createRows()}
    </Wrap>
  );
};

const Wrap = styled.div`
  border-bottom: none;
`;

export default ExpenditureList;
