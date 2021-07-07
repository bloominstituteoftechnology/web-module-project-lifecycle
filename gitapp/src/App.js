import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';
import Card from './Card'

class App extends React.Component {
state = {
  login:'',
  url:'',
  followers:'',
  avatar_url: ''
}
  componentDidMount(){
axios.get('https://api.github.com/users/dmartinlgc')
.then(res => {
  const {login, html_url,followers,avatar_url} = res.data
  this.setState({
     login,
     followers,
     url:html_url,
     avatar_url

  })
 
console.log(res.data)
})
  }
  componentDidUpdate(){
    console.log(this.state)
  }
  render() {
  return (
    <div className="App"> ello Lovely 
      <Card login = {this.state.login}
     followers = {this.state.followers}
     url = {this.state.url}
     avatar_url ={this.state.avatar_url}/>
      </div>
  );
}
}
export default App;
