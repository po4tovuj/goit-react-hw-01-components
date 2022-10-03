import userData from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import Profile from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Profile userData={userData} />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendsList friendsList={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
