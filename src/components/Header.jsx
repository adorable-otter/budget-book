import styled from 'styled-components';
import { ActionsButton, HeaderActions } from '../styles/common';
import { useDispatch } from 'react-redux';
import { openRegisterModal } from '../redux/slices/RegisterModalSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderWrap>
      <HeaderActions>
        <ActionsButton>검색</ActionsButton>
        <h2>2024.11</h2>
        <ActionsButton
          onClick={() => {
            dispatch(openRegisterModal());
          }}
        >
          작성
        </ActionsButton>
      </HeaderActions>
      <nav>
        <MenuList>
          <Menu>한 달 보기</Menu>
          <Menu>일 년 보기</Menu>
          <Menu>통계 </Menu>
        </MenuList>
      </nav>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
`;
const Menu = styled.li`
  list-style: none;
  width: 33%;
  text-align: center;
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0;
`;

export default Header;
