
import { Button, BtnContainer } from "./FeedbackOptions.styles";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options)
  return (
    <BtnContainer>
      {optionsKeys.map(key =>
        <Button
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </Button>
      )}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;