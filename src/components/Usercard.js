import React from 'react';


class UserCard extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    componentDidMount() {
        console.log("Component mounted");
          }

    render(){
        return (
            <div>
            <img src={this.props.avatar} />
            <div>Name: {this.props.name}</div>
            <div>Login: {this.props.login}</div>
            <div>ID: {this.props.id}</div>
            <div>Github URL: {this.props.url}</div>
            <div>Follower URL: {this.props.followers}</div>
            <div>Follower count: {this.props.followerCount}</div>
            </div>
        )
    }
}

export default UserCard;