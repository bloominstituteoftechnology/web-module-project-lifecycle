import React from "react";

class User extends React.Component {
    render(){
        return(
            <div>
            <h1>{this.props.user.name}</h1>
            <img width="300" src = {this.props.user.avatar_url} />
            <h3>Total Repos: {this.props.user.public_repos}</h3>
            <h3>Total Followers: {this.props.user.followers}</h3>
            </div>
        )
    }
}
export default User