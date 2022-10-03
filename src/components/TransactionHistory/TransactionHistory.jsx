import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <div className={styles['table-wrapper']}>
      <table className={styles['transaction-history']}>
        <thead>
          <tr className={styles['header-row']}>
            <th className={styles.cell}>Type</th>
            <th className={styles.cell}>Amount</th>
            <th className={styles.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.row}>
              <td className={styles.cell}>{type}</td>
              <td className={styles.cell}>{amount}</td>
              <td className={styles.cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = PropTypes.arrayOf(
  PropTypes.exact({
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })
);
