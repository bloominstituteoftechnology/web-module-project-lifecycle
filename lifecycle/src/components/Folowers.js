import React from "react";
import axios from 'axios';

export class Followers extends React.Component {
    state = {
        followers: []
    }

    componentDidMount () {
        axios
            .get('https://api.github.com/users/lirongcui/followers')
            .then(res => {
                this.setState({followers: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        const {followers} = this.state;
        if (followers.length === 0) return <p>Loading...</p>
        return (<div className= "follower-div">
            {followers.map((follower) => (
                <div key={follower.id}>
                    <img className= "follower-card" style= {{width: "60px", borderRadius: "50%"}} src={follower.avatar_url} alt={follower.login}/>
                    <h3>{follower.login}</h3>
                </div>
            ))
            }
        </div>);
    }
}