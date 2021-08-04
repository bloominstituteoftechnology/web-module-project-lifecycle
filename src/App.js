import React from 'react'
import './App.css';
import axios from 'axios'
import MyCard from './MyCard'
import Followers from './Followers'

class App extends React.Component {
  state={
    cardData: [],
    followersData: [
      {
        name:'Becky',
        username:'BeckyLambda'
      },
      {
        name:'Jenny',
        username:'JennyLambda'
      },
      {
        name:'Kevvey',
        username:'KevveyLambda'
      }
    ]
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/andrewskr90`)
    .then(res => this.setState({
      ...this.state,
      cardData: res.data
    }))
    .catch(err => console.log(err))

    // axios.get(`https://api.github.com/users/andrewskr90/followers`)
    //   .then(res => console.log(res))
    //   .catch(err=> console.log(err))
  }


  render() {
    return (
      <>
      <MyCard cardData={this.state.cardData}/>
      <Followers followersData={this.state.followersData}/>
      </>
    );
  }
}

export default App;
