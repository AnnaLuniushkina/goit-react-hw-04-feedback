import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage() {
    return this.state.good;
  }

  options = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={this.options}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {!total ? (<Notification message='There is no feedback'/>) : (<Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback}/>)}
        </Section>
      </>
    );
  };
}

export default App;