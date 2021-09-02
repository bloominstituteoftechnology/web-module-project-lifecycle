import axios from 'axios';
import React, { Component } from 'react';


class User extends Component {
    state = {
        user: {},
    };

    componentDidMount() {
        axios
        .get('https://api.github.com/users/sebas6292')
        .then((res) => {
            this.setState({
                user: res.data,
            });
        })
        .catch((err) => console.log(err));
    }

    render() {
        //destructure state 
        const { user } = this.state
        return <div>
            <img style = {{width: '150px', borderRadius: '50%'}}
            src={user.avatar_url} alt={user.login}/>
            <h3>Username: {user.login}</h3>
            <p>ID:{user.id}</p>
            <p>Public Repos: {user.public_repos}</p>
        </div>;
    }
}

export default User;