import React from 'react';
import axios from 'axios';
import './App.css';



// AXIOS //
axios
.get("https://api.github.com/users/DasRedcoat")

.then(response => {
  const gitHubInfo = document.querySelector({})
  gitHubInfo.appendChild(userCardList(response.data))
})

.catch(error => {
  console.log(error)
})



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: data
      
    };
  }




  render() {
    return (
      <div className = "App">
          <UserCardList userCard={this.state.userCard} />
      </div>
    )
  }

}

export default App
