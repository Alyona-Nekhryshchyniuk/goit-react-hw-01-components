import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../JSON/user.json';
import data from '../JSON/data.json';
import friends from '../JSON/friends.json';
import transactions from '../JSON/transactions.json';

export const App = () => {
  return (
    <div style={{ display: 'inline-flex', gap: 25, marginTop: 30 }}>
      <div>
        <Profile user={user} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
