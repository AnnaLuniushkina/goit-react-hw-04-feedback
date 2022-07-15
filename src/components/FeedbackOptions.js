import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(button => {
        return (
            <button
                key={button}
                type='button'
                onClick={onLeaveFeedback}
                name={button}
                className='Feedback__button'
            >{button}</button>
        );
    });
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;