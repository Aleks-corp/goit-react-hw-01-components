import PropTypes from 'prop-types';
import { StatisticElem } from './StatisticElem';
import {
  Container,
  Title,
  StatisticsItem,
  StatisticsList,
} from './StatisticsData.styled';
import { Section, MainTitle } from 'components/module/common.styled';

export const StatisticsData = ({ title, data }) => {
  return (
    <Section>
      <MainTitle>2nt task - Social Profile</MainTitle>
      <Container>
        {title && <Title>{title}</Title>}
        <StatisticsList>
          {data.map(el => (
            <StatisticsItem key={el.id}>
              <StatisticElem el={el} />
            </StatisticsItem>
          ))}
        </StatisticsList>
      </Container>
    </Section>
  );
};

StatisticsData.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
