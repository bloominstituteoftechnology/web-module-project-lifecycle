import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    userData :{},
    followers: {}
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/VAIBHAVIBALAR')
    .then(res =>{
      console.log(res)
      this.setState({
        ...this.state,
        userData: res.data
      })
      console.log(this.state.userData)
    })
    axios.get('https://api.github.com/users/VAIBHAVIBALAR/followers')
    .then(res =>{
      res.data.map(item =>{
        console.log(item)
        this.setState({
          ...this.state,
          followers: item
        })
      })
      
    })
  }
  render() {
    let data = this.state.userData
    console.log(data)
    let users = this.state.followers
    console.log(users)
    return(<div className="App">
        <h1 className="title">Git User Card</h1>
          <div className="Card">
          <div><h1>VAIBHAVIBALAR</h1><img src={data.avatar_url}/></div>
          <div><h2>Bio</h2>{data.bio}</div>
          <div><h2>Location</h2>{data.location}</div>
          <div><h2>Followers</h2>{data.followers}</div>
          </div>
          <div className="Followers">
          <div><h2>Followers avatar</h2><img className="img" src={users.avatar_url}/></div>
          <div><h2>Followers Login</h2>{users.login}</div>
          <div><h2>Followers followers</h2>{users.followers}</div>
          <div><h2>Followers type</h2>{users.type}</div>
       </div> 
      </div>)
  }
}
export default App;