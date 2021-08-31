import React from 'react'

class Profile extends React.Component {
    render () {
        return (
            <div className='user-card'>
                <div className='github-card'>
                    <img src={this.props.userData.avatar_url} width={150} alt={`${this.props.userData.login}'s Github avatar`}/>
                    <h4>{this.props.userData.login}</h4>
                    <h5>Here's a little more about {this.props.userData.name}'s Github Profile</h5>
                    <p>{this.props.userData.bio}</p>
                </div>
                <div className='reset'>
                    <button onClick={this.props.resetHandler}>
                        Find New User
                    </button>
                </div>
            </div>
        )
    }
}

export default Profile