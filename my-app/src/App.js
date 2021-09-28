import React from 'react';
import axios from 'axios';



class App extends React.Component{

  state = {
    followers: [],
   
    
  }


    componentDidMount(){
      axios.get('https://api.github.com/users/minasoha/followers')
        .then(resp =>{
          
          this.setState({
            ...this.state,
            followers: resp.data.map(res =>{
              
              return{
                
                login: res.login,
                picture: res.avatar_url
                
              }
              
            })
            
          })
        })


    }
  render(){
    
      
    return(
      <div>
        <h1>Welcome to my Github</h1>
        <div className="my-github">
          <img src="https://avatars.githubusercontent.com/u/87757115?v=4" />
          <p>Username: minasoha</p>
          <p>Follower Count: 10</p>
        </div>
        <form>
          <input />
          <button> Search</button>
          <div className="followers">
            {  this.state.followers.map(followers => {
                return(
                <div>
                  <img key={followers} width="200" src={followers.picture} />
                  <p>{followers.login}</p>
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