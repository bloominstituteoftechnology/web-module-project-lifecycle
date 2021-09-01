import React from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/Form';
import Profile from './components/Profile';
import Header from './components/Header'

class App extends React.Component {
  state = {
    avatar_url: '',
    bio: '',
    followers: [],
    user: '',
    name: '',
    repos: [],
    isSubmitted: false,
    url: '',
    userData: {}
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      user: e.target.value
    });
  };

 searchUser = username => {
   this.setState({
     isSubmitted: true,
     url: `https://api.github.com/users/${username}`
   });
 };

 resetHandler = () => {
  this.setState({
    user:'',
    isSubmitted: false,
    url:'',
    userData:{}
  });
};

  componentDidMount() {
    console.log('App: CDM');
    // exact same as empty watcher array useEffect
    // using conditional rendering in Profile component so I don't have to have user to start
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isSubmitted !== this.state.isSubmitted) {
      axios.get(this.state.url) // comes from searchUser
        .then(resp=> {
          // console.log('CDU: isSubmitted = TRUE ', resp.data);
          this.setState({
            userData: resp.data //send this to profile component so it renders
          })
        })
        .catch(err => {
          console.log(err);
          this.resetHandler(); 
          window.alert('No user found with that name - please try again');
        })
        .then(
          axios.get(`${this.state.url}/followers`)
            .then(resp => {
              console.log('CDU, successful search, followers' , resp.data);
              this.setState({
                followers: resp.data
              })
            })
        )
        .then(
          axios.get(`${this.state.url}/repos`)
            .then(resp => {
              console.log('CDU: successful repo pull', resp.data);
              this.setState({
                repos: resp.data
              })
            })
        )
    }
  }

  render () {
    // console.log('App: Rendered');
    return (

      <div className='app-container'>

        <Header 
          resetHandler={this.resetHandler}
        
        />
        {!this.state.isSubmitted ?
            <Form
              handleChange={this.handleChange}
              searchUser={this.searchUser}
              user={this.state.user}
            />
          :
            <Profile
              followers={this.state.followers}
              repos={this.state.repos}
              userData={this.state.userData}
            />
        }
      </div>
    );
  };
};

export default App;