import React from 'react'

class Profile extends React.Component {
    render () {
        return (
            
            <div className='user-card-container'>
                {/* <div className='reset'>
                    <button className='search-btn' onClick={this.props.resetHandler}>
                        Find New User
                    </button>
                </div> */}
                <div className='github-card'>
                    <a href={`http://github.com/${this.props.userData.login}`} target='_blank'>
                    <img className='profile-img'src={this.props.userData.avatar_url} width={150} alt={`${this.props.userData.login}'s Github avatar`}/>
                    </a>
                    <h2 className='profile-name'>{this.props.userData.name}</h2>
                    <h4 className='profile-login'>{this.props.userData.login}</h4>
                    <p className='profile-bio'>{this.props.userData.bio}</p>
                    
                </div>

                <div className='followers-container'>
                    {this.props.followers.slice(0, 10).map((follower, index) => {
                        return (
                            
                                <div className='follower' key={index}>
                                    <div className='follower-image'>
                                        <a href={`http://github.com/${follower.login}`} target='_blank'>
                                            <img src={follower.avatar_url} width={50} alt={`${follower.login}'s avatar`} />
                                        </a>
                                    </div>
                                </div>
                            
                        )
                    })}
                </div>
                
                <div className='repos-container'>
                    {this.props.repos.slice(0, 30).map((repo, index) => {
                        return (
                                <div className='repo' key={index}>
                                    <a href={`${repo.clone_url}`} target='_blank'>
                                        <h5>{repo.name}</h5>
                                    </a>
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Profile