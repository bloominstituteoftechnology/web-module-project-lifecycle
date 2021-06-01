import React from "react";
import './App.css';
import axios from "axios";
import CardList from "./Components/CardList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followers: []
    }
  }

componentDidMount() {
  axios
        .get("https://api.github.com/users/adampatt")
        .then((response) => {
          this.setState({ data: response.data })
          console.log("axios response", this.state.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  
   axios
        .get("https://api.github.com/users/adampatt/followers")
        .then((response) => {
          this.setState({ followers: response.data })
          console.log("followers details", this.state.followers)
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  

  
  render () {
    return (
      <div className="App">
        <h1>Hello</h1>
       <CardList data={this.state.data} followers={this.state.followers}/>
      </div>
    );
  }
}
//new is a callto a constructor. you cannot make a instance of the class without going htrought the constructor.
//super is just a callto the constructorfor anything that is extending animal in the childclass. Super holds details that the parent class has.
// functional components are classesinthe background.
export default App;

// Constructor not necessary