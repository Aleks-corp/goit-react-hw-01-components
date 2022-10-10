import PropTypes from 'prop-types';
import { Section, MainTitle } from 'modules/common.styled';
import { FriendItemEl } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <MainTitle>3rd task - Social Profile</MainTitle>

      <ul>
        {friends.map(friend => (
          <FriendItemEl key={friend.id}>
            <FriendListItem friend={friend} />
          </FriendItemEl>
        ))}
      </ul>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
