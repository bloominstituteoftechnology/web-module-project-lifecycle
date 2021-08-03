import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state={
    cardData: {}
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/andrewskr90`)
    .then(res => this.setState({
      ...this.state,
      cardData: res.data
    }))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div
        className='container'
        style={{
          display:'flex',
          justifyContent:'center'
        }}
      >
        <div 
          className='card'
          style={{
            border:'solid black 1px',
            width:'500px',
            height:'300px',
            display:'flex',
            flexDirection:'column',
          }}>
          <div 
            className='header'
            style={{
              margin:'10px 10px 5px 10px',
            }}>
            <h1>{this.state.cardData.login}</h1>
          </div>
          <div
            className='body'
            style={{
              fontSize:'20px',
              margin:'5px 10px 10px 10px',
            }}>
            <p>{this.state.cardData.name}</p>
            <p>{this.state.cardData.location}</p>
            <p>{this.state.cardData.bio}</p>
            <p>{this.state.cardData.public_repos}</p>
          </div>
          
          
        </div>
      </div>
    );
  }
}

export default App;
