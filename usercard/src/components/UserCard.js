import React from 'react'
import axios from 'axios'


class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    componentDidMount() {
        // console.log('App Mounted!')
        axios.get(`https://api.github.com/users/${this.props.userData.login}/followers`)
            // .then(res => console.log(res.data))
            .then(res => this.setState({
                ...this.state,
                followers: res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>{this.props.userData.name}</h1>
                <img src={this.props.userData.avatar_url} alt="N/A" />
                <p>{this.props.userData.bio}</p>
                <p>Location: {this.props.userData.location}</p>
                <p>Total Repos: {this.props.userData.public_repos}</p>
                <a href={this.props.userData.html_url} target="_blank"> Github Profile</a>
                <h2>Followers</h2>
                <ul>
                    {this.state.followers.map(
                        follower => <li><a href={follower.html_url} target="_blank"> {follower.login} </a> </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default UserCard