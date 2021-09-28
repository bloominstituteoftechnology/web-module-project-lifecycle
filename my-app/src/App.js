import React from 'react';
import axios from 'axios';



class App extends React.Component{

  state = {
    followers: [],
    search: ""
  }

    componentDidMount(){
      axios.get('https://api.github.com/users/minasoha/followers')
        .then(resp =>{         
          this.setState({
            ...this.state,
            followers: resp.data.map(res =>{              
              return{                
                login: res.html_url,
                picture: res.avatar_url,
                             
              }              
            })       
          })
        })
    }
    handleInput = e =>{
      this.setState({
        ...this.state, 
        search: e.target.value
      })
    }
    handleSearch = e => {
      e.preventDefault();

      axios.get(`https://github.com/${this.state.search}`)
      .then(resp =>{
        console.log(resp)
      })
    }
  render(){
       
    return(
      <div>
        <h1>Welcome to my Github</h1>
        <div className="myGithub">
          <img src="https://avatars.githubusercontent.com/u/87757115?v=4" />
          <p>Username: minasoha</p>
          <p>Follower Count: 10</p>
          
        </div>
        <form className="followers">
          <input value={this.state.search} onChange={this.handleInput}/>
          <button onClick={this.handleSearch}> Search</button>
          <div className="pics">
            {  this.state.followers.map(followers => {
                return(
                <div className="card">
                  <img key={followers} width="200" src={followers.picture} />
                  <div className="card-info">
                    <p>Profile: <a href = {followers.login}>{followers.login}</a></p>
                  </div>
                  
                </div>
                )
              })
            }
          </div>

        </form>
      </div>
    )
  }



}

export default App;