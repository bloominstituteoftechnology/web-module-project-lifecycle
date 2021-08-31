import React from 'react';

import UserCard from './UserCard';

class UserContainer extends React.Component {
    
    componentDidMount(){
        console.log('User Container:',this.props);
    }

    componentDidUpdate() {
        console.log('User Contain Update:', this.props)
    }

    render(){
        return(
            <div>
                <p>This is the user component</p>
                {/* {this.props.users.map(user=> {
                    return <UserCard user={user}/>
                })} */}
                <UserCard users={this.props.users}/>
            </div>
        )
    }
}

export default UserContainer;