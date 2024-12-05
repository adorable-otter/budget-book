import ExpenditureRow from './ExpenditureRow';
import { fetchExpenditures } from '../apis/expenditures';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ExpenditureList = () => {
  const { authUser } = useSelector((state) => state.authUser);
  const {
    data: expenditures,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['expenditures'],
    queryFn: () => fetchExpenditures(authUser.id),
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
  border: 1px solid gray;
  border-bottom: none;
`;

export default ExpenditureList;
