import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import userObj from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

let {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = userObj;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
