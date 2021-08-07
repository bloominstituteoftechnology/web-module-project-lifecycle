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
            <div>{this.props.name}</div>
            <div>{this.props.login}</div>
            <div>{this.props.id}</div>
            <div>{this.props.url}</div>
            <div>{this.props.followers}</div>
            <div>Follower count: {this.props.followerCount}</div>
            </div>
        )
    }
}

export default UserCard;