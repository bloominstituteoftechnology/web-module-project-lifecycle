import React from 'react';
import axios from 'axios';
import './App.css';

// Getting Feet Wet

// axios.get('https://api.github.com/users/wzd200')
//   .then(res => {
//     const gitData = res
//     console.log(gitData)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to the Github Usercard Application</h1>
//     </div>
//   );
// }

// Using Class Components //

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className="App">
       <h1>
         Welcome to the Github Usercard Application
        </h1>
      </div>
    )
  }

}

export default App;
