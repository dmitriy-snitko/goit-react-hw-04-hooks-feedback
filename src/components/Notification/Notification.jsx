import { Message } from './Notification.styles';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <Message>{message}</Message>

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
export default Notification;