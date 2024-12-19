import { useDispatch } from 'react-redux';
import { openRegisterModal } from '../../redux/slices/RegisterModalSlice';
import useTotalAmounts from '../../hooks/useTotalAmounts';
import { Progress } from 'antd';
import styled from 'styled-components';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts';
import { getIconColor } from '../../modules/categoryIcons';

const BudgetSection = () => {
  const dispatch = useDispatch();
  const { data: dataList, isPending, isError } = useTotalAmounts();

  const handleRegisterButtonClick = () => {
    dispatch(openRegisterModal('budget'));
  };

  const createPieChartData = () => {
    return dataList.map(({ category_code, category_total, total_expenditures, category_name }) => ({
      id: category_code,
      value: Math.round((category_total / total_expenditures) * 100),
      label: category_name,
      color: getIconColor(category_code),
    }));
  };

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error</div>;

  const budget = dataList ? dataList[0].budget_amount : 1;
  const totalExpenditures = dataList ? dataList[0].total_expenditures : 0;

  return (
    <Wrap>
      <ProgressWrap>
        <Progress
          size={{ height: '20px' }}
          percent={Math.floor((totalExpenditures / budget) * 100)}
          status="active"
          strokeColor="crimson"
        />
        <PieChart
          series={[
            {
              data: createPieChartData(),
              innerRadius: 30,
              outerRadius: 110,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 315,
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 35,
              arcLabelRadius: '80%',
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: 'bold',
              fill: 'white'
            },
          }}
          width={400}
          height={200}
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
  padding: 0 20px;
  display: flex;
  align-items: center;
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
