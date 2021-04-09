import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SJMucho/followers")
      .then((res) => console.log(res.data.message))
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
