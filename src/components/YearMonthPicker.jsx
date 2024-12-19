import { Button, DatePicker } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { move, selectYearMonth } from '../redux/slices/SelectedYearMonthSlice';

const YearMonthPicker = () => {
  const { selectedYearMonth } = useSelector((state) => state.selectedYearMonth);
  const dispatch = useDispatch();

  const handleMonthChange = (amount) => {
    dispatch(move({ amount, target: 'month' }));
  };

  const handleDateChange = (date) => {
    dispatch(selectYearMonth(date));
  };

  return (
    <Wrap>
      <Button
        icon={<CaretLeftOutlined />}
        onClick={() => handleMonthChange(-1)}
        style={{
          border: 'none',
          background: 'none',
          padding: 0,
          color: '#013220',
        }}
      />
      <DatePicker
        picker="month"
        value={selectedYearMonth}
        onChange={handleDateChange}
        format="YYYY-MM"
        allowClear={false}
        style={{
          width: '91px',
          color: '#013220',
          fontWeight: 'bold',
        }}
        variant="borderless"
        size="large"
        suffixIcon={null}
        inputFontSize=""
      />
      <Button
        icon={<CaretRightOutlined />}
        onClick={() => handleMonthChange(1)}
        style={{ border: 'none', background: 'none', padding: 0, color: '#013220' }}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default YearMonthPicker;
