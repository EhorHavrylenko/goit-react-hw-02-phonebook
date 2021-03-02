import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

const options = [ 'good', 'neutral', 'bad' ];

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
	return (
		<button className={styles.btn} type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
			{feedback}
		</button>
	);
};

const FeedbackOptions = ({ onLeaveFeedback }) => {
	return options.map((option) => FeedbackButton({ feedback: option, onLeaveFeedback }));
};

FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
