import { useState } from 'react';
import styled from 'styled-components';
import RegisterModal from '../components/registerModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>Home</div>
      {isModalOpen && <RegisterModal />}
    </>
  );
};

export default Home;
