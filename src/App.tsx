import React from 'react'
import axios from 'axios'

import { User, Follower } from './models/User.model'

import UserCard from './components/UserCard'

interface AppProps {

}

interface AppState {
  user: User | null
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
        const user: User = {
          username: login,
          avatar: avatar_url,
          url: html_url,
          location,
          followers: []
        }

        axios.get(`${BASE_URL}/lindellcarternyc/followers`)
          .then(res => {
            res.data.forEach((u: any) => {
              const follower: Follower = {
                username: u.login,
                url: u.html_url,
                avatar: u.avatar_url
              }
              user.followers.push(follower)
            })
            this.setState({ user })
          })
          .catch(err => {
            console.error(err)
          })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    const toRender = this.state.user ? (
      <UserCard user={this.state.user}/>
    ) : <h2>Loading...</h2>

    return (
      <div>
        <h1>Github User Card</h1>
        {toRender}
      </div>
    )
  }
}

export default App;
