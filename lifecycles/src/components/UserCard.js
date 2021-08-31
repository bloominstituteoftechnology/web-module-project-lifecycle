import React from 'react'

class UserCard extends React.Component {
    constructor() {
        super()
        this.state = {
            user: ''
        }
    }

    render() {
        return(
            <div className='card'>
                <h3 className='name'>{this.props.userData.name}</h3>
                <p>{this.props.userData.location}</p>
                <img src={this.props.userData.avatar_url} alt='user profile' width='15%'/>
                    <div className='card-info'>
                        <p className='username'>Username: {this.props.userData.login}</p>
                        <p className='Bio'>Bio: {this.props.userData.bio}</p>
                        <p className='followers'>Followers: {this.props.userData.followers}</p>
                        <p className='following'>Following: {this.props.userData.following}</p>
                         <a href={this.props.userData.html_url}>   
                            <button>Github Profile</button>
                        </a>
                    </div>
            </div>
        )
    }
}

export default UserCard;