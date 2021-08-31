import React from 'react';

class UserCard extends React.Component {
    componentDidUpdate(){
        console.log("User Card update: ", this.props)
    }

    render(){

        return(
            <div>
                <h3>{this.props.users.users.name}</h3>
                <img src={this.props.users.users.avatar_url}></img>
                <p>{this.props.users.users.bio}</p>
                
            </div>
        )
    }
}

export default UserCard;