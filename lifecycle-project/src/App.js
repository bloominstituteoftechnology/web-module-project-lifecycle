
import React from 'react';
import axios from "axios";
import Card from "./components/Card";
import './App.css';

class App extends React.Component {
  state = {
    userCard: [],
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/klove-a")
      .then(res => res.data)
      .then(res => {
        this.setState({
          ...this.state,
          userCard:res
        });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Github User</h1>
        <div className="userDiv">
          <Card userCard={this.state.userCard}/>
        </div>
      </div>
    );
  }
}

export default App;
