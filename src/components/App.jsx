import PropTypes from 'prop-types';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from '../JSON';

const App = () => {
  return (
    <div style={{ display: 'inline-flex', gap: 25, marginTop: 30 }}>
      <div>
        <Profile user={user} />
        <Statistics stats={Array.from(data)} />
      </div>
      <FriendList friends={Array.from(friends)} />
      <TransactionHistory transactions={Array.from(transactions)} />
    </div>
  );
};

App.propTypes = {
  user: PropTypes.object,
  data: PropTypes.objectOf(PropTypes.array.isRequired),
  friends: PropTypes.objectOf(PropTypes.array.isRequired),
  transactions: PropTypes.objectOf(PropTypes.array.isRequired),
};

export default App;
