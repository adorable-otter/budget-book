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
    let amountByDate = 0;
    return expenditures.reduce((acc, expenditure, idx) => {
      if (date !== expenditure.date) {
        date = expenditure.date;
        acc.push(<DateRow date={date} />);
      }
      acc.push(<ExpenditureRow key={expenditure.id} data={expenditure} />);
      amountByDate += expenditure.amount;
      if (idx + 1 === expenditures.length || date !== expenditures[idx + 1].date) {
        acc.push(<TotalExpenditure>{'- ' + amountByDate.toLocaleString('ko')}</TotalExpenditure>);
        amountByDate = 0;
      }
      return acc;
    }, []);
  };

  return <Wrap>{createRows()}</Wrap>;
};

const TotalExpenditure = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  color: crimson;
  padding: 10px 20px 10px 10px;
  border-bottom: 1px solid lightgray;
`;

const Wrap = styled.div`
  border-bottom: none;
`;

export default ExpenditureList;
