import styled from 'styled-components';
import { openRegisterModal } from '../redux/slices/RegisterModalSlice';
import { useDispatch } from 'react-redux';
import { selectExpenditure } from '../redux/slices/SelectedExpenditureSlice';
import getCategoryIcons from '../modules/categoryIcons';

const ExpenditureRow = ({ data }) => {
  const { content, amount, categories } = data;
  const dispatch = useDispatch();

  const handleRowClick = () => {
    dispatch(selectExpenditure(data));
    dispatch(openRegisterModal());
  };

  return (
    <Grid onClick={handleRowClick}>
      <CategoryImg>{getCategoryIcons(categories.code, { size: 40 })}</CategoryImg>
      <ExpenditureName>{content}</ExpenditureName>
      <ExpenditureAmount>{amount.toLocaleString('ko')}</ExpenditureAmount>
      <CategoryName>{categories.name}</CategoryName>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 2fr 1fr;
  border-bottom: 1px solid gray;
  padding: 10px;
`;

const CategoryImg = styled.div`
  grid-row: span 2;
  align-self: center;
  justify-self: center;
  padding-right: 10px;
`;

const ExpenditureName = styled.div``;

const ExpenditureAmount = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: right;
  align-items: center;
  color: crimson;
  padding-right: 10px;
`;

const CategoryName = styled.div`
`;

export default ExpenditureRow;
