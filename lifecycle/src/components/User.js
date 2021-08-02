import React from 'react'

class User extends React.Component {
    render() {
        return (
            <div className='user'>
                <img src={this.props.user.avatar_url} alt='avatar' />
                <h3>Name: {this.props.user.name}</h3>
                <h4>Username: {this.props.user.login}</h4>
            </div>
        )
    }
}

export default User