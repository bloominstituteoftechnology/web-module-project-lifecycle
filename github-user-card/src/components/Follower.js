import React from 'react';

class Follower extends React.Component {
    render() {
        const { follower } = this.props;

        return(
            <div> 
                <div className="card">
                    <div>
                        <img src={follower.avatar_url} />
                    </div>
                    {/* <div className="name">
                        <h2>{follower.name}</h2>
                    </div> */}
                    <div className="username">
                        <p>Username: {follower.login}</p>
                    </div>
                    {/* data below doesn't appear to be accessible through GH API */}
                    {/* <p>{follower.location}</p>
                    <p>Followers: {follower.followers}</p>
                    <p>Following: {follower.following}</p>
                    <p>{follower.bio}</p> */}
                </div>
            </div>
        )
    }

}

export default Follower;