import { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterModal } from '../redux/slices/RegisterModalSlice';
import ExpenditureForm from './ExpenditureForm';
import { unselectExpenditure } from '../redux/slices/SelectedExpenditureSlice';

const RegisterModal = () => {
  const { isRegisterModalOpen } = useSelector((state) => state.isRegisterModalOpen);
  const modal = useRef();
  const dispatch = useDispatch();

  if (!isRegisterModalOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === modal.current) {
      dispatch(closeRegisterModal());
      dispatch(unselectExpenditure());
    }
  };

  return (
    <Modal className={'modal-container'} ref={modal} onClick={(e) => handleBackdropClick(e)}>
      <Dialog className={'modal-content'}>
        <ExpenditureForm />
      </Dialog>
    </Modal>
  );
};

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000cc;
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 35%;
  max-height: 90vh;
  min-height: 400px;
  overflow: auto;
  border-radius: 6px;
`;

export default RegisterModal;
