import Container from './Container.styled';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { user, data, friends, transactions } from '../JSON';

const App = () => {
  return (
    <Container>
      <div>
        <Profile user={user.default} />
        <Statistics stats={data.default} />
        <Statistics title="This Is Statistics Title" stats={data.default} />
      </div>

      <FriendList friends={friends.default} />
      <TransactionHistory transactions={transactions.default} />
    </Container>
  );
};

export default App;
