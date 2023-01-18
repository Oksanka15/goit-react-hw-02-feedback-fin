import { StatisticsList } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StatisticsList>
      <li>good:{good}</li>
      <li>neutral:{neutral}</li>
      <li>bad:{bad}</li>
      <li>Total:{total}</li>
      <li>{good === 0 ? '0' : positivePercentage} %</li>
    </StatisticsList>
  </>
);
