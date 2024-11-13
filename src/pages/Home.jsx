import styled from 'styled-components';
import RegisterModal from '../components/RegisterModal';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import ExpenditureRow from '../components/ExpenditureRow';

const Home = () => {
  const { isRegisterModalOpen } = useSelector((state) => state.isRegisterModalOpen);
  const { expenditures } = useSelector((state) => state.expenditures);

  return (
    <HomeWrap>
      <Header />
      <main>
        <div>예산 영역</div>
        <Grid>
          {expenditures.map((data) => (
            <ExpenditureRow key={data.id} data={data} />
          ))}
        </Grid>
      </main>
      {isRegisterModalOpen && <RegisterModal />}
    </HomeWrap>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export default Home;
