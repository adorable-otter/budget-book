import styled from 'styled-components';
import { ActionsButton, HeaderActions } from '../styles/common';
import { useDispatch } from 'react-redux';
import { openRegisterModal } from '../redux/slices/RegisterModalSlice';
import YearMonthPicker from './YearMonthPicker';
import useAuth from '../hooks/auth/useAuth';

const Header = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth();

  return (
    <HeaderWrap>
      <UserActions>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </UserActions>
      <HeaderActions>
        <ActionsButton>검색</ActionsButton>
        <YearMonthPicker />
        <ActionsButton
          onClick={() => {
            dispatch(openRegisterModal('expenditure'));
          }}
        >
          작성
        </ActionsButton>
      </HeaderActions>
      <nav>
        {/* <MenuList>
          <Menu>한 달 보기</Menu>
          <Menu>일 년 보기</Menu>
          <Menu>통계 </Menu>
        </MenuList> */}
      </nav>
    </HeaderWrap>
  );
};

const LogoutButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 0.8rem;
`

const UserActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const HeaderWrap = styled.div`
  width: 100%;
`;

// const Menu = styled.li`
//   list-style: none;
//   width: 33%;
//   text-align: center;
//   padding: 10px;
//   cursor: pointer;
// `;

// const MenuList = styled.ul`
//   display: flex;
//   padding: 0;
//   border-bottom: 1px solid lightgray;
// `;

export default Header;
