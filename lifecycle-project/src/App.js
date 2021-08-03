
import React from 'react';
import axios from "axios";
import Card from "./components/Card"
import './App.css';

class App extends React.Component {
  state = {
    userCard: [],
  }

  render() {
    return(
      <div>
        <p>Stuff go's here</p>
        <Card/>
      </div>
    );
  }
}

export default App;
