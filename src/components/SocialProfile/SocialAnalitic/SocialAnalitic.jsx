import PropTypes from 'prop-types';
import {
  AnaliticWrapper,
  AnaliticContainer,
  Title,
  Data,
} from './SocialAnalitic.styled';
export const SocialAnalitic = ({ stats: { followers, views, likes } }) => {
  return (
    <AnaliticContainer>
      <AnaliticWrapper>
        <Title>Followers</Title>
        <Data>{followers}</Data>
      </AnaliticWrapper>
      <AnaliticWrapper>
        <Title>Views</Title>
        <Data>{views}</Data>
      </AnaliticWrapper>
      <AnaliticWrapper>
        <Title>Likes</Title>
        <Data>{likes}</Data>
      </AnaliticWrapper>
    </AnaliticContainer>
  );
};

SocialAnalitic.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
