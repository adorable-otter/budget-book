import { useDispatch } from 'react-redux';
import { openRegisterModal } from '../../redux/slices/RegisterModalSlice';

const BudgetSection = () => {
  const dispatch = useDispatch();

  const handleRegisterButtonClick = () => {
    dispatch(openRegisterModal('budget'));
  };

  return (
    <section>
      <div>프로그래스</div>
      <button onClick={handleRegisterButtonClick}>예산등록</button>
    </section>
  );
};

export default BudgetSection;
