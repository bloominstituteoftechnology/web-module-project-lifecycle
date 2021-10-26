import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  render() {
    return(<div>
      Github Card
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
