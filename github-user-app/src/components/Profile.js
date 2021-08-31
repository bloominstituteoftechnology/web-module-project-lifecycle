import React from 'react'

class Profile extends React.Component {
    render () {
        return (
            <div className='user-card'>

            { this.props.input === undefined ? 'Pick a user to search' : 
                <div className='github-card'>
                    <img src={this.props.avatar_url} width={150} alt={`${this.props.login}'s Github avatar`}/>
                    <h4>{this.props.login}</h4>
                    <h5>Here's a little more about {this.props.name}'s Github Profile</h5>
                    <p>{this.props.bio}</p>
                </div>
            }
                
            </div>
        )
    }
}

export default Profile