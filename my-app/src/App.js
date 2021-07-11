import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      usercards: [],
      followers: []
    }
  }

  render() {
    return (
      <div>
        <h2>My Usercard</h2>
      </div>
    )
  }
}

export default App;