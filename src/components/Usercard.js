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
            <div>{this.props.name === '' ? '' : `Name: ${this.props.name}`}</div>
            <div>{this.props.login === '' ? '' : `login: ${this.props.login}`}</div>
            <div>{this.props.id === null ? '' : `ID: ${this.props.id}`}</div>
            <div>{this.props.url === '' ? '' : `Github URL: ${this.props.url}`}</div>
            <div>{this.props.followers === '' ? '' : `Follower URL: ${this.props.followers}`}</div>
            <div>{this.props.followerCount === null ? '' : `Follower Count: ${this.props.followerCount}`}</div>
            </div>
        )
    }
}

export default UserCard;