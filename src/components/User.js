import React from 'react';

class User extends React.Component{


    

    render(){
        return(
        <div className='user-main'>
            <div className='user-second'>
                <img className='userImg' src={this.props.user.avatar_url} alt='this is a profile img'/>
                <div className='card' >
                <h1 className='userName'>{this.props.user.name}</h1>
                <p className='userBio'>{this.props.user.bio}</p>
                <h1 className='userRepos'>Repos:{this.props.user.public_repos}</h1>
                <h1 className='userFriends'>Followers:{this.props.user.followers}</h1>
                </div>
            </div>
        </div>
        )
    }

}
export default User;