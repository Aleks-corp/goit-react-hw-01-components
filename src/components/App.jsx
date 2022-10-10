import profile from '../user.json';
import { SocialProfile } from './SocialProfile/SocialProfile';
// import data from '../data.json';
// import { StatisticsData } from './StatisticsData/StatisticsData';
// import friends from '../friends.json';
// import { FriendList } from './FriendList/FriendList';

import { Header, Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>React homework 1</Header>

      <SocialProfile profile={profile} />

      {/* <>
        <StatisticsData profile={data} />
      </>
      <>
        <FriendList profile={friends} />
      </> */}
    </Container>
  );
};
