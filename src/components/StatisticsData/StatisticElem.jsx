import PropTypes from 'prop-types';
import { Label, Percentage, Wrapper } from './StatisticElem.styled';

export const StatisticElem = ({ el }) => {
  return (
    <Wrapper>
      <Label>{el.label}</Label>
      <Percentage>{el.percentage}%</Percentage>
    </Wrapper>
  );
};

StatisticElem.propTypes = {
  el: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
