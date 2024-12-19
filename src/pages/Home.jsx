import styled from 'styled-components';
import RegisterModal from '../components/RegisterModal';
import Header from '../components/Header';
import BudgetSection from '../components/budget/BudgetSection';
import ExpenditureList from '../components/expenditure/ExpenditureList';

const Home = () => {

  return (
    <HomeWrap>
      <Header />
      <main>
        <BudgetSection />
        <ExpenditureList />
      </main>
      <RegisterModal />
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid lightgray;
  border-bottom: none;
  margin-bottom: 20px;
`;

export default Home;
