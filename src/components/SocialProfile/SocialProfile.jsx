import PropTypes from 'prop-types';
import { SocialDesc } from './SocialDesc/SocialDesc';
import { SocialStats } from './SocialStats/SocialStats';
import { Title, Container } from './SocialProfile.styled';

export const SocialProfile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      <Title>1st task - Social Profile</Title>
      <Container>
        <SocialDesc
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <SocialStats stats={stats} />
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
