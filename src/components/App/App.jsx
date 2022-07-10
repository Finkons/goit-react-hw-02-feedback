import { Component } from 'react';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Container from './app.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const LeaveFeedback = this.onLeaveFeedback;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={LeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {TotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={TotalFeedback}
              positivePercentage={PositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
