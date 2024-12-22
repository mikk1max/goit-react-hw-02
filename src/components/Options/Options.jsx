const Options = ({ updateFeedback, isResetVisible, resetFeedbacks }) => {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {isResetVisible && (
        <button type="button" onClick={() => resetFeedbacks()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
