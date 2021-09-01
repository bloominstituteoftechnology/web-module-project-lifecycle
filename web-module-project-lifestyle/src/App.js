// import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'




class App extends React.Component {
  state = {
    followerList: [],
    followers: '',
    visibleFollowers: [],
    user: {}
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/Pluviio/followers`)
      .then(resp => {
        this.setState({
          followerList: resp.data,
          visibleFollowers: resp.data
        });
      })
      .catch(err => {
        console.log(err);
      })
    axios.get(`https://api.github.com/users/Pluviio`)
      .then(resp => {
        this.setState({
          user: resp.data,
        });
      })
      .catch(err => {
        console.log(err);
      })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/Pluviio/${this.state.followers}`)
      .then(resp => {
        this.setState({
          ...this.state,
          followerList: resp.data,
          visibleFollowers: resp.data
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      followers: e.target.value,
      visibleFollowers: this.state.followerList.filter(F => {
        console.log(F);
        return F.login.includes(e.target.value)
      })
    })
  }

  handleFilter() {
    this.setState({
      ...this.state,
      visibleFollowers: this.state.followerList.filter(F => {
        console.log(F);
        F.login.includes(this.state.followers)
      })
    })
  }


  render() {
    return (
      <div className="Header">
        <h2>My GitHub</h2>

        <div className="myInfo">
          <h2>My GitHub Information</h2>


          <div className="infoCard">

            <div className="infoImg">
              <img width={225} src={this.state.user.avatar_url} />
            </div>

            <div className="infoBody">
              <h3>Name: {this.state.user.name} </h3> <br />
              <p>Bio: {this.state.user.bio} </p> <br />
              <p>Location: {this.state.user.location}</p> <br />
            </div>

          </div>
        </div>

        <div className="submitSect">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.followers} onChange={this.handleChange} />
            <button>Search Followers</button>
          </form>
        </div>

        <div id="followerList">

          {
            this.state.visibleFollowers.map(login => {
              console.log(login);
              return <div className="followerCard">

                <div className="followerImage">
                  <img width={150} src={login.avatar_url} />
                </div>

                <div className="followerBody">
                <h3>Username: {login.login}</h3>
                <p>GitHub: {login.url}</p>
                </div>


              </div>

            })

          }

        </div>

      </div>
    );
  }
}

export default App;
