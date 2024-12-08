import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router/Router';

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
