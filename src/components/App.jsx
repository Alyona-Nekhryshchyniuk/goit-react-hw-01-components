import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from '../JSON';

const App = () => {
  return (
    <div style={{ display: 'inline-flex', gap: 25, marginTop: 30 }}>
      <div>
        <Profile user={user.default} />
        <Statistics stats={data.default} />
        <Statistics title="This Is Statistics Title" stats={data.default} />
      </div>

      <FriendList friends={friends.default} />
      <TransactionHistory transactions={transactions.default} />
    </div>
  );
};

export default App;
