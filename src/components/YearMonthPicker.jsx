import { Button, DatePicker } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const YearMonthPicker = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handleMonthChange = (amount) => {
    setCurrentDate((prev) => prev.add(amount, 'month'));
  };

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  return (
    <Wrap>
      <Button
        icon={<CaretLeftOutlined />}
        onClick={() => handleMonthChange(-1)}
        style={{ border: 'none', background: 'none', padding: 0 }}
      />
      <DatePicker
        picker="month"
        value={currentDate}
        onChange={handleDateChange}
        format="YYYY-MM"
        allowClear={false}
        style={{
          width: '87px',
        }}
        variant="borderless"
        size="large"
        suffixIcon={null}
        inputFontSize=""
      />
      <Button
        icon={<CaretRightOutlined />}
        onClick={() => handleMonthChange(1)}
        style={{ border: 'none', background: 'none', padding: 0 }}
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
