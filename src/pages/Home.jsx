import styled from 'styled-components';
import RegisterModal from '../components/RegisterModal';
import Header from '../components/Header';
import ExpenditureList from '../components/ExpenditureList';
import { useSelector } from 'react-redux';

const Home = () => {
  const { authUser } = useSelector((state) => state.authUser);

  return (
    <HomeWrap>
      <Header />
      <main>
        <div>예산 영역</div>
        <div>{authUser.nickname}</div>
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
`;

export default Home;
