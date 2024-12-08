import styled from 'styled-components';
import RegisterModal from '../components/RegisterModal';
import Header from '../components/Header';
import ExpenditureList from '../components/ExpenditureList';
import BudgetSection from '../components/budget/BudgetSection';

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
`;

export default Home;
