import PropTypes from 'prop-types';
import { SocialDesc } from './SocialDesc/SocialDesc';
import { SocialStats } from './SocialStats/SocialStats';
import { Container } from './SocialProfile.styled';
import { Section, MainTitle } from 'components/module/common.styled';

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
