import PropTypes from 'prop-types';
import { SocialDesc } from './SocialDesc/SocialDesc';
import { SocialStats } from './SocialStats/SocialStats';
import { Container } from './SocialProfile.styled';
import { Section, MainTitle } from 'modules/common.styled';

export const SocialProfile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <Section>
      <MainTitle>1st task - Social Profile</MainTitle>
      <Container>
        <SocialDesc
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <SocialStats stats={stats} />
      </Container>
    </Section>
  );
};

SocialProfile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
