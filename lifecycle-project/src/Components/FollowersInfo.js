import React from 'react'

class FollowersInfo extends React.Component {
    render(){
        return(
            <div>
                <div className="cards">
                <div className="card">
                    <img src={this.props.follower.avatar_url} alt="" />
                    <div className="container">
                        <h4 className="card-title">{this.props.follower.login}</h4>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default FollowersInfo 