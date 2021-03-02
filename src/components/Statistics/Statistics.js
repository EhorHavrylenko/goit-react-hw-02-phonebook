import React from 'react';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <>
            {total > 0 && (
                <ul className={styles.list}>
				<li className={styles.list_item}>Good:{good}</li>
				<li className={styles.list_item}>Neutral: {neutral}</li>
				<li className={styles.list_item}>Bad: {bad}</li>
				<li className={styles.list_item}>Total: {total}</li>
				<li className={styles.list_item}>Positive Feedback: {positiveFeedback}%</li>
			</ul>
            )}
            
            {total === 0 && (
                <Notification/>
            )}
		</>
	);
};

export default Statistics;
