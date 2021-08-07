import React from 'react';
import './App.css';
import UserCard from './components/Usercard.js';
import NewUser from './components/Newuser.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: ''
    }
  }


render(){
  return (
    <div className="App">
      <NewUser />
      <UserCard />
    </div>
  );
}
}

export default App;
