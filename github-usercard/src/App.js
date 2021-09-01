import React from 'react';
import User from './components/User.js';
import Followers from './components/Followers.js';
import styled from 'styled-components';
import './App.css';

const Div = styled.div`
  width: 80%;
  margin: auto;
`

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    fetch("https://api.github.com/users/KRQuinn")
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: res
        });
        fetch("https://api.github.com/users/KRQuinn/followers")
          .then(res => res.json())
          .then(res => {
            this.setState({
              followers: res
            })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Div className="App">
        <User data={this.state.user}/>
        <h1>Followers</h1>
        <InnerDiv>
          {this.state.followers.map(fol => {
            return (
              <Followers key={fol.id} data={fol}/>
            );
          })}
        </InnerDiv>
      </Div>
    );
  }
  
}

export default App;

