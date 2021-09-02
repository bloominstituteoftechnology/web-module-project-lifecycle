import React  from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className='user'>
                <header>
                <div>
                    <h1>GitHub Friends</h1>
                <img src={this.props.user.avatar_url} alt='avatar' />
                </div>
                <h2>Name: {this.props.user.name}</h2>
                <h2>GitHub Handle: {this.props.user.login}</h2>
                </header>

            </div>
        );
    }
}

export default UserCard;

// import React from 'react'

// export default function UserCard() {
//     return (
//         <div>
            
//         </div>
//     )
// }
