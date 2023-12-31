import { Profile } from '../components/Profile/Profile';
import user from '../data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../data/data.json';
import friends from '../data/friends.json';
import {FriendList} from '../components/FriendList/FriendList';
import transactions from '../data/transactions.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
