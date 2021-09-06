import React from 'react';
 import axios from 'axios';
 import UserCard from './components/UserCard';
 import FollowerCard from './components/FollowerCard';

 class App extends React.Component {
   constructor() {
     super();
     this.state = {
       user: [],
     }
   }


   componentDidMount() {
     axios.get("https://api.github.com/users/WrongAlice")
       .then(res => this.setState({
         ...this.state,
         user: res.data
       }))
       .catch(err => console.log(err))
   }


   render() {
     return (
       <div className="App">
         <h1>UserCard project</h1>
         <UserCard login={this.state.user.login} followers={this.state.user.followers} avatar={this.state.user.avatar_url}/>
         <FollowerCard />
       </div>
     );
   }
 }

 export default App; 