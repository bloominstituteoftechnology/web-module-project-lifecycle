import './App.css';
import React from 'react'
import axios from 'axios'

class App extends React.Component {
  state = {
      Name: '',
      Public_Repos: '',
      Followers: '',
      Following: '',
    }
    componentDidMount(){
      axios.get("https://api.github.com/users/Brendonjhawkins")
      .then(res=> {
        console.log(res)
        this.setState({
          Name: res.data.login,
          Public_Repos: res.data.public_repos,
          Followers: res.data.followers,
          Following: res.data.following
        })
      })
      .catch(err=>{
        console.error(err)
      })
    }
  
    render(){
      return(
        <div>
        <h1>{this.state.Name} Github Card</h1>
        <div>
          <p>
          Public Repos: {this.state.Public_Repos}<br/>
          Followers: {this.state.Followers}<br/>
          Following: {this.state.Following}
          </p>
        </div>
        </div>
        )
    }

}

export default App;