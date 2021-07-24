import { useState } from 'react';
import { Container, FeedbackContainer } from './App.styles';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round(good * 100 / countTotalFeedback());

  const onLeaveFeedback = (key) => {
    switch (key) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default: return;
    };
  };

  return(
    <Container>
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ?
            <Statistics
              state={{ good, neutral, bad }}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            /> :
            <Notification message="No feedback given" />
          }
        </Section>
      </FeedbackContainer>
    </Container>
  );
};

export default App;
