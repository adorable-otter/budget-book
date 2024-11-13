import styled from 'styled-components';

const ExpenditureRow = ({ data }) => {
  const { iconUrl, name, amount, categoryName } = data;

  return (
    <>
      <CategoryImg>{iconUrl}</CategoryImg>
      <ExpenditureName>{name}</ExpenditureName>
      <ExpenditureAmount>{amount.toLocaleString('ko')}</ExpenditureAmount>
      <CategoryName>{categoryName}</CategoryName>
    </>
  );
};

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
