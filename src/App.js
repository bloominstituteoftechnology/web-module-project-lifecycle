import React from 'react';
import User from "./components/User";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    input: "davemadden",
    user: {},
    followers: [],
  };

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp=> {
        // console.log("didmount response: ", resp.data);
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.user !== prevState.user){
      // console.log("didupdate runs", prevState.user, this.state.user)
      axios.get(`https://api.github.com/users/${this.state.input}/followers`)
      .then(resp=> {
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`search for ${this.state.input} in github`)
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(resp=> {
        // console.log("submit response: ", resp.data)
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err=> {
        console.error(err);
      })
  }

  render() {
    return(<div>
      <h1>Github Card</h1>
      <form name="searchForm" onSubmit={this.handleSubmit}>
        <input value={this.state.input} type="text" name="searchText" onChange={this.handleChange}/>
        <button>search</button>
      </form>
      <User user={this.state.user} followers={this.state.followers}/>
    </div>);
  }
}

export default App;
