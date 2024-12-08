import { useDispatch } from 'react-redux';
import { openRegisterModal } from '../../redux/slices/RegisterModalSlice';
import useTotalAmounts from '../../hooks/useTotalAmounts';
import { Progress } from 'antd';
import styled from 'styled-components';

const BudgetSection = () => {
  const dispatch = useDispatch();
  const { data, isPending, isError } = useTotalAmounts();

  const handleRegisterButtonClick = () => {
    dispatch(openRegisterModal('budget'));
  };

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error</div>;

  const budget = data ? data.budget_amount : 1;
  const totalExpenditures = data ? data.total_expenditures : 0;

  return (
    <Wrap>
      <ProgressWrap>
        <Progress
          size={{ height: '20px' }}
          percent={Math.floor((totalExpenditures / budget) * 100)}
          status="active"
          strokeColor='crimson'
        />
      </ProgressWrap>
      <MenuList>
        <Menu></Menu>
        <Menu>사용 현황</Menu>
        <Menu onClick={handleRegisterButtonClick}>예산 수정</Menu>
      </MenuList>
      <div></div>
    </Wrap>
  );
};

const Wrap = styled.section`
  border-bottom: 1px solid lightgray;
`;

const ProgressWrap = styled.div`
  padding: 40px;
`;

const Menu = styled.li`
  list-style: none;
  width: 33%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0;
  border-top: 1px solid lightgray;
`;

export default BudgetSection;
