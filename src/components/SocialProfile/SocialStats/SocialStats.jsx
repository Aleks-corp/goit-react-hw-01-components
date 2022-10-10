import PropTypes from 'prop-types';
import {
  StatsWrapper,
  StatsContainer,
  StatsLabel,
  StatsQuantity,
} from './SocialStats.styled';
export const SocialStats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsContainer>
      <StatsWrapper>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsWrapper>
      <StatsWrapper>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsWrapper>
      <StatsWrapper>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsWrapper>
    </StatsContainer>
  );
};

SocialStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
