import React from 'react'

class FollowersInfo extends React.Component {
    render(){
        return(
            <div>
                <h2>User Name: {this.props.follower.login}</h2>
                <img src={this.props.follower.avatar_url} alt="Img"/>
                <p>Follow here: {this.props.follower.html_url}</p>
            </div>
        )
    }
}
export default FollowersInfo