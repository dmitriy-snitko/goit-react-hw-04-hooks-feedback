import { List, Item, Text } from "./Statistics.styles";
import PropTypes from 'prop-types';

const Statistics = ({ total, positivePercentage, state }) => {
  const stateKeys = Object.keys(state);

  return (
    <List>
      {stateKeys.map(key => {
        return (
          <Item key={key + state[key]}>
            <Text>{key}: {state[key]}</Text>
          </Item>
        );
      })}

      <Item>
        <Text>Total: {total}</Text>
      </Item>
      <Item>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
}

export default Statistics;



