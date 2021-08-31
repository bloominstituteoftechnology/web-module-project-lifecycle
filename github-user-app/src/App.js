import React from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/Form';
import Profile from './components/Profile';

class App extends React.Component {
  state = {
    avatar_url: '',
    bio: '',
    user: '',
    name: '',
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
      axios.get(this.state.url)
        .then(resp=> {
          // console.log('CDU: isSubmitted = TRUE ', resp.data);
          this.setState({
            userData: resp.data //send this to profile component so it renders
          })
        })
        .catch(err => {
          console.log(err);
          window.alert('No user found with that name - please try again')
        })
    }
  }

  render () {
    // console.log('App: Rendered');
    return (

      <div className='app-container'>

        <h1>Github User App</h1>
        {!this.state.isSubmitted ?
            <Form
              handleChange={this.handleChange}
              searchUser={this.searchUser}
              user={this.state.user}
            />
          :
            <Profile
              resetHandler={this.resetHandler}
              userData={this.state.userData}
            />
        }
      </div>
    );
  };
};

export default App;