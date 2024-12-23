import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [options, setOptions] = useState(() => {
    const savedOptions = window.localStorage.getItem("saved-feedbacks");

    if (savedOptions?.length) {
      return JSON.parse(savedOptions);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [feedbackType]: prevOptions[feedbackType] + 1,
    }));
  };

  const resetAll = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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
