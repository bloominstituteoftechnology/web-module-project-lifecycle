import React from 'react';
import Follower from './Follower';
// import axios from 'axios';

class UserFollowers extends React.Component {
    // componentDidMount() {
    //     axios.get("https://api.github.com/users/Vehmeyer/following")
    //       .then((res) => {
    //         console.log(res.data)
    //         this.setState({
    //           followers: res.data
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     })  
    // }

    render() {
        return (
            <div className="container">
                <h3>Following:</h3>
                {this.props.followers.map(follower => (
                    <Follower key={follower.id} follower={follower} />
                ))}
            </div>
        )
    }
}

export default UserFollowers;