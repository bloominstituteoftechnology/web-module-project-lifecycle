import React from 'react';
import axios from 'axios';

import UserContainer from './components/UserContainer';

class App extends React.Component {

  state = {
    users:[]
  }


  componentDidMount(){
    axios.get('https://api.github.com/users/brentbess21')
      .then(res=> {
        console.log(res.data);
        this.setState({
          ...this.state,
          users: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <UserContainer users={this.state} />
      </div>
    )
  }
}

export default App;