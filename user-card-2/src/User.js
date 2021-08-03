import React from 'react'

class User extends React.Component {
    render(){
        return(
            <div>
                <h2>name: {this.props.user.name}</h2>
                <img src={this.props.user.avatar_url} alt="Img"/>
                <p>bio: {this.props.user.bio}</p>
            </div>
    )
 }
}
export default User