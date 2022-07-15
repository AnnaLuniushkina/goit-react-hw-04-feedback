import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <p className='Feedback__message'>{message}</p>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;