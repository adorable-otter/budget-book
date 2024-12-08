import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import AuthenticatedOnly from './AuthenticatedOnly';
import NotAuthenticatedOnly from './NotAuthenticatedOnly';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<AuthenticatedOnly />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<NotAuthenticatedOnly />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
`;

export default Router;
