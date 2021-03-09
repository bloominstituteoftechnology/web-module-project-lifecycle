import React from 'react'
import axios from 'axios'

interface AppProps {

}

interface AppState {
  user: {
    username: string
    avatar: string
    url: string
    location: string
  } | null
}

const BASE_URL = 'https://api.github.com/users'

class App extends React.Component<AppProps, AppState> {
  constructor(props: { }) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/lindellcarternyc`)
      .then(res => {
        const { login, avatar_url, html_url, location } = res.data
        this.setState({
          user: {
            username: login,
            avatar: avatar_url,
            url: html_url,
            location
          }
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Github User Card</h1>
        {JSON.stringify(this.state.user)}
      </div>
    )
  }
}

export default App;
