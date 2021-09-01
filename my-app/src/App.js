import React from 'react';
import axios from 'axios';

import Follower from './Follower';
import Mycard from './Mycard';
import './App.css';

class App extends React.Component {
  state = {
      myCard: '',
      followersCards: []
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/ayv8er')
      .then(res => {
        this.setState({
          ...this.state,
          myCard:res.data
        })
        axios.get(res.data['followers_url'])
          .then(response => {
              response.data.forEach(user => {
                axios.get(user.url)
                  .then(resp => {
                    console.log(resp)
                    // this.setState({
                    //   ...this.state,
                    //   followersCards: resp
                    // })
                  })
              })
            })
          })
      .catch(error => {
          console.log(error) 
      })
  }

  render() {
    return (
      <>
      <header><h1>Richard's Github Information</h1></header>
        <div> <Mycard myCard={this.state.myCard} /> </div>

        <div className='followers'>
          {
            this.state.followersCards.map(item => {
              // console.log(item)
              return <Follower key={item.data.id} follower={item.data} />
            })
          }
        </div>
      </>
    )
  }
}

export default App;