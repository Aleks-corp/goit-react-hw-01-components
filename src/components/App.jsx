import profile from 'modules/user.json';
import { SocialProfile } from './SocialProfile/SocialProfile';
import data from 'modules/data.json';
import { StatisticsData } from './StatisticsData/StatisticsData';
import friends from 'modules/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from 'modules/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Header, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>React homework 1</Header>

      <SocialProfile profile={profile} />

      <StatisticsData title="Upload stats" data={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
