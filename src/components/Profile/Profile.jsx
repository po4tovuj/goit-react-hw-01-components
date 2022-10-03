import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import { User } from 'components/User/User';
import { UserStatistics } from 'components/UserStatistics/UserStatistics';

const Profile = ({ userData }) => (
  <div className={styles.profile}>
    <User
      name={userData.username}
      avatar={userData.avatar}
      location={userData.location}
      tag={userData.tag}
    />
    <UserStatistics stats={userData.stats} />
  </div>
);
Profile.propTypes = {
  userData: PropTypes.object,
  User: PropTypes.elementType,
  UserStatistics: PropTypes.elementType,
};
export default Profile;
