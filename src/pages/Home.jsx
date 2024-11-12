import styled from 'styled-components';
import RegisterModal from '../components/RegisterModal';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isRegisterModalOpen } = useSelector((state) => state.isRegisterModalOpen);
  return (
    <HomeWrap>
      <Header />
      <main>
        <div>예산 영역</div>
        <div>날짜별 리스트</div>
      </main>
      {isRegisterModalOpen && <RegisterModal />}
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export default Home;
