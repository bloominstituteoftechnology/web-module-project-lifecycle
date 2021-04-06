import React from 'react';
import axios from 'axios';
import './App.css';

import UsercardList from './Components/UsercardList'

// Getting Feet Wet



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

  componentDidMount() {
    axios.get('https://api.github.com/users/wzd200')
      .then(res => {
        const gitData = res
        console.log(gitData)
      })
      .catch(err => {
        console.log(err)
      })

    }

  render() {
    return (
      <div className="App">
       <h1>
         Welcome to the Github Usercard Application
        </h1>
        <UsercardList />
      </div>
    )
  }

}

export default App;
