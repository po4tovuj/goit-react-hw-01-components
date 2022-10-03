import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

export const FriendsList = ({ friendsList }) => {
  return (
    <ul className={styles['friends-list']}>
      {friendsList.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
FriendsList.propsType = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
