import React from 'react';
import axios from 'axios';


class App extends React.Component {
  
  state = {
    githubData: [],
    image: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AnthonyMillerGit')
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          githubData: res.data,
          image: res.data.avatar_url
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
  return (
    <div className="App">
      <h1>Github Card</h1>
      <div>
        {this.state.githubData.map( i => {
          return(<p>{i}</p>)
        })}
      </div>
    </div>
  );
  }
}

export default App;
