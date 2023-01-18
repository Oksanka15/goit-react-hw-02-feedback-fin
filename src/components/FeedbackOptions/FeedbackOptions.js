export const FeedbackOptions = p => (
  <>
    <button onClick={p.onLeaveFeedback(p.options.good)} type="button">
      good
    </button>
    <button onClick={p.onLeaveFeedback(p.options.neutral)} type="button">
      neutral
    </button>
    <button onClick={p.onLeaveFeedback(p.options.bad)} type="button">
      bad
    </button>
  </>
);
