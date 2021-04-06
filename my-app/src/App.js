import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: data
    };
  }




  render() {
    return (
      <div className = "App">
          <UserCardList userCard={this.state.userCard} />
      </div>
    )
  }

}

export default App
