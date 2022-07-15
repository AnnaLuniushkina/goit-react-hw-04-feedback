import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
        <div>
        <ul className="Feedback__list">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedback}</li>
        </ul>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}

export default Statistics;