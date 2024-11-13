import styled from 'styled-components';
import { openRegisterModal } from '../redux/slices/RegisterModalSlice';
import { useDispatch } from 'react-redux';
import { selectExpenditure } from '../redux/slices/SelectedExpenditureSlice';

const ExpenditureRow = ({ data }) => {
  const { iconUrl, name, amount, categoryName } = data;
  const dispatch = useDispatch();

  const handleRowClick = () => {
    dispatch(selectExpenditure(data));
    dispatch(openRegisterModal());
  };

  return (
    <Grid onClick={handleRowClick}>
      <CategoryImg>{iconUrl}</CategoryImg>
      <ExpenditureName>{name}</ExpenditureName>
      <ExpenditureAmount>{amount.toLocaleString('ko')}</ExpenditureAmount>
      <CategoryName>{categoryName}</CategoryName>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

const CategoryImg = styled.div`
  grid-row: span 2;
  border-bottom: 1px solid gray;
`;

const ExpenditureName = styled.div``;

const ExpenditureAmount = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: right;
  align-items: center;
  border-bottom: 1px solid gray;
  color: crimson;
  padding-right: 10px;
`;

const CategoryName = styled.div`
  border-bottom: 1px solid gray;
`;

export default ExpenditureRow;
