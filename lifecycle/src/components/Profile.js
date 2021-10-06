import React from 'react';
import axios from 'axios';

export class Profile extends React.Component {
    state = {
        profile: null,
    };


    componentDidMount() {
        axios
            .get('https://api.github.com/users/lirongcui')
            .then(res => {
                this.setState({profile: res.data});
            })
            .catch((err) => console.log(err));
    }

    render() {
        const {profile} = this.state;
        if (!this.state.profile) return <p>Loading...</p>;
        return (
            <div>
                <img style={{ width: "150px", borderRadius: "50%" }} src={this.state.profile.avatar_url} alt={this.state.profile.name}/>
                <h1>{profile.name}</h1>
                <p>Location: {profile.location}</p>
                <p>Followers: {profile.followers}</p>
            </div>
        )
    }
}