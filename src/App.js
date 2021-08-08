import React from 'react';
import './App.css';
import NewUser from './components/Newuser.js';
import githubFooter from './components/githubFooter.png';
import styled from 'styled-components';


const Image = styled.img`
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

class App extends React.Component {
  constructor(){
    super();

    this.state = {
    }
  }




render(){
  return (
    <div className="App">
      <NewUser />
    <Image src={githubFooter} className="footerImage" alt="github logo"/>
    </div>
  );
}
}

export default App;