import PropTypes from 'prop-types';
import {
  CardWrapper,
  AvatarImg,
  UserName,
  Tag,
  Location,
} from './SocialCard.styled';
export const SocialCard = ({ username, tag, location, avatar }) => {
  return (
    <CardWrapper>
      <AvatarImg src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </CardWrapper>
  );
};

SocialCard.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
