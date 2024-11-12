import { useRef } from 'react';
import styled from 'styled-components';

const RegisterModal = () => {
  const modal = useRef();

  return (
    <Modal className={'modal-container'} ref={modal}>
      <Dialog className={'modal-content'}>
        <DialogHeader>
          <Button>불러오기</Button>
          <HeaderTitle>내역 입력</HeaderTitle>
          <Button>저장하기</Button>
        </DialogHeader>
        <Form>
          <Grid>
            <Label htmlFor="name">날짜</Label>
            <FormContent>
              <Input type="text" id="name"></Input>
            </FormContent>
            <Label htmlFor="amount">구분</Label>
            <FormContent>{/* <button>지출</button> */}</FormContent>
            <Label htmlFor="amount">금액</Label>
            <FormContent>
              <Input type="number" id="amount"></Input>
              {/* <button>x</button> */}
            </FormContent>
            <Label htmlFor="name">사용내역</Label>
            <FormContent>
              <Input type="text" id="name"></Input>
            </FormContent>
            <Label htmlFor="place">사용장소</Label>
            <FormContent>
              <Input type="text" id="place"></Input>
            </FormContent>
            <Label htmlFor="사용장소">분류</Label>
            <FormContent>
              <Input type="text" id="category"></Input>
            </FormContent>
          </Grid>
        </Form>
      </Dialog>
    </Modal>
  );
};

const HeaderTitle = styled.h3`
  text-align: end;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  height: 35px;
  color: white;
  padding: 7px;
  background-color: #3e80fa;
  font-weight: bold;
  box-shadow: inset 0 0 1px;
`;

const FormContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  border-left: 2px double crimson;
  width: 100%;
  padding-left: 10px;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #5591ff;
  padding: 8px;
  height: 50px;
`;

const Form = styled.form`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 5px 5px 5px 15px;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000cc;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  caret-color: #15cbadbd;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
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
  min-height: 500px;
  overflow: auto;
  border-radius: 6px;
`;
export default RegisterModal;
