import React from "react";


class Follower extends React.Component{
    render(){
        return (
            <div>
                <img width="200" src={this.props.follower.avatar_url} />
                <h1>{this.props.follower.login}</h1>
            </div>
        )
    }
}
export default Follower 