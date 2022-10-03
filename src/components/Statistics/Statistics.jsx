import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
export const Statistics = ({ title, data }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : ''}

      <ul className={styles['stat-list']}>
        {data.map(item => (
          <li key={item.id} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
