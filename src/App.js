import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';
import Follower from './components/Follower';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
                
      github: {
        id:"",
      name: '',
      login: '',
      avatar_url: '',
      location: '',
      bio: '',
      url: '',
      followers: '',
      }
    }
    
  }

  componentDidMount() {
    console.log(' Component  Mounted')
    axios.get('https://api.github.com/users/mcmillanj')
        .then(response => this.setState({
            ...this.state,
            github: response.data
        })) 
        axios.get('http//api.github.com/users/mcmillanj/followers')	        
        .then(response => {	          
           console.log(response.data);	              
          this.setState({	                
            ...this.state,	                  
            followers: response.data })
            })  
        
    .catch(error => {	
      console.log(error)	
    })	   

  }

  render() {
    return (
      <div className="App">
        <h1> GITHUB INFO:</h1>
         {this.state.github.name}
         <div className='Card'></div>
        <User user={this.state.github}/>
        <div className='followers'>	        
          <Follower  followers={this.item} />	              
            	            
          	          
      </div>
      </div>
    );
  }
}

export default App; 
