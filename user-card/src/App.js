import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    userData :{},
    followers: [],
    searchuser: {}
  }
  //Commented bcoz of stretch goals
  // componentDidMount(){
  //   axios.get('https://api.github.com/users/VAIBHAVIBALAR')
  //   .then(res =>{
  //     console.log(res)
  //     this.setState({
  //       ...this.state,
  //       userData: res.data
  //     })
  //     console.log(this.state.userData)
  //   })
  //   axios.get('https://api.github.com/users/VAIBHAVIBALAR/followers')
  //   .then(res =>{
  //     res.data.map(item =>{
  //       console.log(item)
  //       this.setState({
  //         ...this.state,
  //         followers: item
  //       })
  //     })
      
  //   })
  // }
  


  //Stretach Goals
  handleChange =(e)=>{
    this.setState({
      ...this.state,
      searchUser: e.target.value
    })
  }
  handleClick =(e)=>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.searchUser}`)
    .then(res =>{
      this.setState({
        ...this.state,
        userData: res.data
      })
    })
    axios.get(`https://api.github.com/users/${this.state.searchUser}/followers`)
    .then(res =>{
      console.log(res.data)
      // res.data.map(item =>{
      //   console.log(item)
        this.setState({
          ...this.state,
          followers: res.data
        })
      // })
      
    })
    .catch(err =>{
      console.log(err)
    })
  }
  render() {
    let data = this.state.userData
    let users = this.state.followers
    console.log(users)
    return(<div className="App">
        <h1 className="title">Git User Card</h1>
        <form>
          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search User</button>
        </form>
          <div className="Card">
          <div><h1>User</h1><img src={data.avatar_url}/></div>
          <div><h2>Bio</h2>{data.bio}</div>
          <div><h2>Location</h2>{data.location}</div>
          <div><h2>Followers</h2>{data.followers}</div>
          </div>
          <div className="Followers">
            {users.map(item =>{
              return(<div>
                 <div><h2>Followers avatar</h2><img className="img" src={item.avatar_url}/></div>
              <div><h2>Followers Login</h2>{item.login}</div>
              <div><h2>Followers followers</h2>{item.followers}</div>
              <div><h2>Followers type</h2>{item.type}</div>
              </div>)
             
            })}
          
       </div> 
      </div>)
  }
}
export default App;