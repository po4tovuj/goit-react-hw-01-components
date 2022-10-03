import PropTypes from 'prop-types';
import styles from './User.module.css';
export const User = ({ name, avatar, tag, location }) => (
  <div className={styles.description}>
    <img src={avatar} alt={name} className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);
User.propTypes = {
  user: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
