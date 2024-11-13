import ExpenditureRow from './ExpenditureRow';
import { useSelector } from 'react-redux';

const ExpenditureList = () => {
  const { expenditures } = useSelector((state) => state.expenditures);
  
  return (
    <div>
      {expenditures.map((data) => (
        <ExpenditureRow key={data.id} data={data} />
      ))}
    </div>
  );
};



export default ExpenditureList;
