import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  const = {
    user: "rickyklusmeier",
    userData: [],
    followersArr: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          this.setState({
            userData: res.data
          })
        })
        .catch(err => {
          console.log(err)
        })

        axios.get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(res => {
            const followers = []
            res.data.forEach(evt => {
              followers.push(evt.login)
            })
            this.setState({followersArr: followers})
          })
          .catch(err => {
            console.log(err)
          })
  }

  render() {
  return (
    <div className="App">
      <UserCard userData={this.state.userData}/>
      <Followers followersArr={this.state.followersArr}/>
    </div>
  );
}
}

export default App;
