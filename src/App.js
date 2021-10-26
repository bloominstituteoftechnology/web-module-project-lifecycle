import React from 'react';
import axios from "axios";
import User from './components/User';
import FollowerList from './components/FollowerList';
import Follower from './components/Follower.js';
class App extends React.Component {
  state = {
    user: {},
    followers: [],
    input: ''

  }
    componentDidMount() {
        axios.get(`https://api.github.com/users/andrejohnson`)
        .then(rp =>{
         console.log(rp)
         this.setState({
          ...this.state,
          user: rp.data,
          followers: rp.data.followers_url
      });
        })
        .catch(err=> {
          console.log(err);
      });
    }


    handleChange = (e) => {
      this.setState({
          ...this.state,
          input: e.target.value
      });
  }
  
  handleSubmit = (e) => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.input}`)
          .then(resp=> {
              this.setState({
                  ...this.state,
                  user: resp.data
                 
              })
          })
          .catch(err=> {
              console.log(err);
          })
  }
  

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios.get(`https://api.github.com/users/${this.state.input}`)
  //         .then(resp=> {
  //             this.setState({
  //                 ...this.state,
  //                 user: resp.data
  //             })
  //         })
  //         .catch(err=> {
  //             console.log(err);
  //         })
  // }
  

  render() {
    return(

      <div>
        <h1>Github Info</h1>

        <div className="search-bar">
            <form onSubmit={this.handleSubmit}>
                <input
                  type = 'text'
                  value = {this.state.input}
                  onChange = {this.handleChange}
                  placeholder = 'Enter Github handle'
                />
                <button>Search</button>
            </form>

            <User user={this.state.user}/>
            <FollowerList followers={this.state.followers}/>
            <Follower followers={this.state.followers}/>
        </div>
    
      </div>
    );
  }
}

export default App;
