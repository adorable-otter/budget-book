import dayjs from 'dayjs';
import { getDayKo } from '../modules/date';
import styled from 'styled-components';

const DateRow = ({ date }) => {
  return <Row>{dayjs(date).format('MM.DD (') + getDayKo(dayjs(date).day()) + ')'}</Row>;
};

const Row = styled.div`
  padding: 10px 10px 10px 15px;
  background-color: #fff1e1;
  font-size: 0.9rem;
`

export default DateRow;
