import React from 'react';
import User from './components/User';
import axios from 'axios';
import FollowerList from './components/FollowerList';



class App extends React.Component {
  state = {
    user: [],
    input: ""
}
componentDidMount() {
  axios.get('https://api.github.com/users/jessweb87')
      .then(resp=> {
          this.setState({
              ...this.state,
              user: resp.data
          });
      })
      .catch(err=> {
          console.log(err);
      });
}
handleChange = (e) => {
  this.setState({
      ...this.state,
      input: e.target.value
  });
}
handleSubmit = (e) => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp=> {
          this.setState({
              ...this.state,
              user: resp.data
          })
      })
      .catch(err=> {
          console.log(err);
      })
}

  
  
  
  
  render() {
    return(<div>
      Github Card
      <div className = 'search-bar'>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Search</button>
        <User user={this.state.user}/>
        <FollowerList gitHandle ={this.state.user.login}/>
      </div>
    </div>);
  }
}

export default App;
