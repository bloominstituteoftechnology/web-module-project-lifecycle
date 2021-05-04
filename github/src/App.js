import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    card: [],
    followers: []
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/ZacharyCooremans')
    .then((res) => {
      console.log(res)
      this.setState({
        card: res.data
      })
      axios
      .get('https://api.github.com/users/ZacharyCooremans/followers')
      .then((res) => {
        console.log(res)
        this.setState({
          followers: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>{this.state.card.login}</h2>
        {
          this.state.followers.map(person => {
            return <p>{person.login}</p>
          })
        }
      </div>
    );
  }
}

export default App;
