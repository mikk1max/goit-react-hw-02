import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const INITIAL_FEEDBACKS = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [options, setOptions] = useState(
    () =>
      JSON.parse(localStorage.getItem("saved-feedbacks")) ?? {
        INITIAL_FEEDBACKS,
      }
  );

  const updateFeedback = (feedbackType) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1,
    }));
  };

  const resetAll = () => {
    setOptions(INITIAL_FEEDBACKS);
  };

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(options));
  }, [options]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        isResetVisible={totalFeedback > 0 ? true : false}
        resetFeedbacks={resetAll}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={options}
          stats={{ Total: totalFeedback, Positive: `${positiveFeedback}%` }}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
