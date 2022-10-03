import PropTypes from 'prop-types';
import styles from './UserStatistics.module.css';
export const UserStatistics = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {Object.keys(stats).map(stat => (
        <li key={stat} className={styles['stats-item']}>
          <span className={styles.label}> {stat}: </span>
          <span className={styles.quantity}> {stats[stat]}</span>
        </li>
      ))}
    </ul>
  );
};
UserStatistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};
