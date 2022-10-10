import PropTypes from 'prop-types';
import { SocialCard } from './SocialCard/SocialCard';
import { SocialAnalitic } from './SocialAnalitic/SocialAnalitic';
import { Title, Container } from './SocialProfile.styled';

export const SocialProfile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      <Title>1st task - Social Profile</Title>
      <Container>
        <SocialCard
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <SocialAnalitic stats={stats} />
      </Container>
    </>
  );
};

SocialProfile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
