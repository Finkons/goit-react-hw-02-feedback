import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    {options.map((option, index) => (
      <Button key={index} name={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </Wrapper>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
