import React from 'react';


class User extends React.Component {
    render(){
        return (
        <div>I am user {this.props.user.name}
        
        </div>
        
        ) 
    }
}
export default User