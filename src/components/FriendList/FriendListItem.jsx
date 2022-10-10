import PropTypes from 'prop-types';
import { OnlineStatus, Image, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Image src={avatar} alt={name} width="60" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
