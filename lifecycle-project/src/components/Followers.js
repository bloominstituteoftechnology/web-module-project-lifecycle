import React from "react";

class Followers extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div className="followerDiv">
                <h2>{this.props.followers.login}</h2>
            </div>
        )
    }
}

export default Followers;