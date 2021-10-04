import React from 'react'

class FollowingData extends React.Component {
    render() {
        return(
            <div>
                <div className="cards">
                    <div className="card">
                        <img src={this.props.following.avatar_url} alt="" />
                        <div classname="title-container">
                            <h4 className="title">{this.props.following.login}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowingData