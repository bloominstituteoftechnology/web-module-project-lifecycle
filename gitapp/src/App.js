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
  avatar_url: '',
  followersArray:[]
}
  componentDidMount(){
axios.get('https://api.github.com/users/dmartinlgc')
.then(res => {
  const {login, html_url,followers,avatar_url,followers_url} = res.data
 axios.get(followers_url)
 .then(res2 =>{
   this.setState({
     ...this.state,
   followersArray:res2.data  
   })
   console.log(res2.data)
 })
  this.setState({
    ...this.state,
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
     {
          this.state.followersArray.map((item) => {
            console.log('thats so raven ')
            return (<Card
              login = {item.login}
              followers = {1000}
              url = {item.html_url}
              avatar_url= {item.avatar_url}
              />)
          })
        }
      </div>
  );
}
}
export default App;
