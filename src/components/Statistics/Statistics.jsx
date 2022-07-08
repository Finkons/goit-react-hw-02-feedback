import PropTypes from 'prop-types';
import {
  AiOutlineMeh,
  AiFillLike,
  AiFillDislike,
  AiFillDatabase,
  AiFillCheckCircle,
} from 'react-icons/ai';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsList>
    <StatisticsItem>
      <AiFillLike size={35} />
      <span>Good : {good}</span>
    </StatisticsItem>
    <StatisticsItem>
      <AiOutlineMeh size={35} />
      <span>Neutral : {neutral}</span>
    </StatisticsItem>
    <StatisticsItem>
      <AiFillDislike size={35} />
      <span>Bad : {bad}</span>
    </StatisticsItem>
    <StatisticsItem>
      <AiFillDatabase size={35} />
      <span>Total: {total}</span>
    </StatisticsItem>
    <StatisticsItem>
      <AiFillCheckCircle size={35} />
      <span>Positive feedback : {positivePercentage}</span> %
    </StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
