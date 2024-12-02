import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from './shared/Router';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
