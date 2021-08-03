import React from "react";

class Followers extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div>
                <h2>Name: {this.props.followers.login}</h2>
            </div>
        )
    }
}

export default Followers;