import React from 'react';

class FollowerList extends React.Component {

    handleClick = (e) => {
        this.props.updateUserInfoApi(e.target.name)
    }
    
    render() {
      return (
        <div>
            <h1>My Followers</h1>
            <div className='myGallery'>
                {
                    this.props.followers.map(follower => (
                        <div className='item' key={follower.login}>
                            <img src={follower.avatar_url} alt='user' name={follower.login} onClick={this.handleClick}/>
                            <span className='caption'>{follower.login}</span>
                        </div>
                      ))
                }
            </div>
        </div>
         
      )
    }
  }
  
  export default FollowerList;
  