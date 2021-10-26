import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

const userName = 'Kseniyapl'

class App extends React.Component {
  state = {
    user:[]
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/${userName}`)
    .then(resp=>{
      console.log(resp.data)
      this.setState({
        ...this.state,
        user:resp.data
      })
    })
    .catch(err => {
      console.log(err)
    })

  }
  render() {
    return(<div>
      Github Card
      <User user={this.state.user}/>
      <FollowerList />
    </div>);
  }
}

export default App;
