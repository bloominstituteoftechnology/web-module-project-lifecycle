import axios from 'axios';
import React, { Component, useReducer } from 'react';

class User extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        // fetch user data
        axios.get("https://api.github.com/users/imjeremiah")
            .then(res => {
                this.setState({
                    user: res.data,
                });
            })
            .catch((err) => console.log(err));
    }


    render() {
        // destructure state
        const { user } = this.state;
        if (!user) return <p>Loading Data ...</p>
        return (
            <div>
                <img style={{ width: "150px", borderRadius: "50%" }}src={user.avatar_url} alt={user.name} />
                <h3>{user.name}</h3>
                <p>username: {user.login}</p>
                <p>repos: {user.public_repos}</p>

            </div>
        )
    }
}

export default User;