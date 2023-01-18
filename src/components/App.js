import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import PropTypes from 'prop-types';
const options = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
 
  onLeaveFeedback = option => () => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  }

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Pleese leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

App.protoType = {
  options: PropTypes.oneOf(['good', 'neutral', 'bad']),

  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};
