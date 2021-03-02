import React, { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	handleFeedback = ({ target }) => {
		const { feedback } = target.dataset;
		this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
	};

	totalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	PositiveFeedback = () => {
		const { good } = this.state;
		const totalFeed = this.totalFeedback();
		return totalFeed ? Math.round(good / totalFeed * 100) : 0;
	};

	render() {
		const { good, neutral, bad } = this.state;

		return (
			<div className="wrap">
				<h2 className="title">Please Leave Feedback</h2>
				<Section>
					<FeedbackOptions onLeaveFeedback={this.handleFeedback} />
				</Section>

				<h2 className="statistics">Statistics</h2>
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={this.totalFeedback()}
					positiveFeedback={this.PositiveFeedback()}
				/>
			</div>
		);
	}
}

export default App;
