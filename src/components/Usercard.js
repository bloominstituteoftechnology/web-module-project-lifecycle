import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            login: '',
            id: 0,
            url: '',
            avatar: '',
            followers: '',
            followerCount: 0
        }
    }

    componentDidMount() {
        console.log("Component mounted");
            axios.get("https://api.github.com/users/Mykeb96")
            .then(res => this.setState({
                ...this.state,
                name: res.data.name,
                login: res.data.login,
                id: res.data.id,
                url: res.data.html_url,
                avatar: res.data.avatar_url,
                followers: res.data.followers_url
              }))
              .catch(err => console.log(err))
          }

    render(){
        return (
            <div>
            <img src={this.state.avatar} />
            <div>{this.state.name}</div>
            <div>{this.state.login}</div>
            <div>{this.state.id}</div>
            <div>{this.state.url}</div>
            <div>{this.state.followers}</div>
            <div>Follower count: {this.state.followerCount}</div>
            </div>
        )
    }
}

export default UserCard;