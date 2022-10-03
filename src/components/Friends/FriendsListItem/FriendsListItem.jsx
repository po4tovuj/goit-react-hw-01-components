import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

export const FriendsListItem = ({ name, avatar, isOnline }) => (
  <li className={styles.item}>
    <span
      className={
        isOnline
          ? styles.status
          : [styles.status, styles['status--online']].join(' ')
      }
    ></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
FriendsListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.bool,
};
