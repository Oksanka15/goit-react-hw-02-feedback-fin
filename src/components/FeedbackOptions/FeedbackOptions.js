import { Button, ButtonList } from './Feedback.style'

export const FeedbackOptions = p => (
  <ButtonList>
    <Button onClick={p.onLeaveFeedback(p.options.good)} type="button">
      good
    </Button>
    <Button onClick={p.onLeaveFeedback(p.options.neutral)} type="button">
      neutral
    </Button>
    <Button onClick={p.onLeaveFeedback(p.options.bad)} type="button">
      bad
    </Button>
  </ButtonList>
);
