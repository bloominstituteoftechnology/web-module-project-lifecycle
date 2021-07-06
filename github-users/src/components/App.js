import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state= {
    URL: '',
    pic: '',
    name: '',
    followers: 0    
  }

  componentDidMount(prevProps, prevState) {
    axios.get('https://api.github.com/users/spencerp34')
      .then(res => {
        this.setState({
          ...this.state,
          URL: res.data.url,
          pic: res.data.avatar_url,
          name: res.data.name,
          followers: res.data.followers
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log('submitted')


    var form = document.getElementById("myForm");
    form.reset();
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>What Class Mate shall we stalk today?</h1>
          <form id='myForm' onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' placeholder='Github User' />
            <button>Lets Stalk!</button>
          </form>
        </header>

      </div>
    );
  }
}

export default App;
