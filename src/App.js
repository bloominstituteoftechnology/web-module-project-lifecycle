import React from 'react'
import './App.css';
import axios from 'axios'
import MyCard from './MyCard'
import FollowersCard from './FollowersCard'

class App extends React.Component {
  state={
    cardData: {}
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/andrewskr90`)
    .then(res => this.setState({
      ...this.state,
      cardData: res.data
    }))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <MyCard/>
    );
  }
}

export default App;
