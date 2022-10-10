import PropTypes from 'prop-types';
import {
  DeskWrapper,
  AvatarImg,
  UserName,
  Tag,
  Location,
} from './SocialDesc.styled';
export const SocialDesc = ({ username, tag, location, avatar }) => {
  return (
    <DeskWrapper>
      <AvatarImg src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DeskWrapper>
  );
};

SocialDesc.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
