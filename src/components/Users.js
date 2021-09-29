import React from 'react';
import User from "./User"

class Users extends React.Component{

    componentDidMount()
    {
        console.log("UserS: Component Mounts");
    }

    render()
    {
        console.log("UserS: Renders DOM");
        return(
            <>
                {this.props.usersArray.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </>
        );
    };
};

export default Users;