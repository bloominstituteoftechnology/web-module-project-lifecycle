import React from 'react';
// import axios from 'axios';

class User extends React.Component {

    render() {
        const { user } = this.props;
        // console.log(this.props.user.name)
        return (
            <div key={user.id} className="profile-container">
                <img width='150' src={user.avatar_url}/>
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.html_url}</p>
                    <h3>Total Repos: {user.public_repos}</h3>
                    <h3>Total Followers: {user.followers}</h3>
                </div>
            </div>
        )
    }
}

export default User;