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
        // .then((resp) =>{
          
        //   this.setState({
        //       ...this.state,
        //       followers: resp.data.map(result =>{
        //         return{
        //            login: result.login,
        //            picture: result.avatar_url
    
        //   }})
          
        // }})})

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
        <div>
          {
            this.state.followers.map(followers => {
              return(<img  key={followers} width="200" src={followers} />)
            })

          }
        </div>
      </div>
    )
  }



}

export default App;