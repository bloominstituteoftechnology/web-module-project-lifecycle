import React from 'react';
import axios from 'axios';

import Follower from './Follower';
import './App.css';

class App extends React.Component {
  state = {
      myCard: '',
      followersCards: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/ayv8er')
      .then(res => {
        // console.log(res)
        this.setState({
          ...this.state,
          myCard: res.data
        })
        axios.get(res.data['followers_url'])
          .then(response => {
            // console.log(response)
            this.setState({
              ...this.state,
              followersCards: response.data
            })
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
      <header><h1>Richard's Github Information</h1></header>
        <div className='myCard'>
          <div className='myPic'>
            <img src={this.state.myCard.avatar_url} alt={this.state.myCard.login}/>
          </div>
        </div>

        <div className='followers'>
          {
            this.state.followersCards.map(item => {
              console.log(item)
              return <Follower key={item.id} follower={item} />
            })
          }
        </div>
      </>
    )
  }
}

export default App;