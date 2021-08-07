import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    componentDidUpdate(prevState) {
        // console.log('App Mounted!')
        if (prevState.user !== this.state.followers) {
            // console.log("User Changed!! ");
            axios.get(`https://api.github.com/users/${this.props.userData.login}/followers`)
                // .then(res => console.log(res.data))
                .then(res => this.setState({
                    ...this.state,
                    followers: res.data
                }))
                .catch(err => console.log(err))
        }

        // }

    }

    render() {
        return (
            <div>
                {/* <div>{this.props.login === '' ? '' : `login: ${this.props.login}`}</div> */}
                <h1>{this.props.userData.name === '' ? '' : this.props.userData.name}</h1>
                <img src={this.props.userData.avatar_url} alt="N/A" />
                <p>{this.props.userData.bio}</p>
                <p>Location: {this.props.userData.location}</p>
                <p>Total Repos: {this.props.userData.public_repos}</p>
                <a href={this.props.userData.html_url} target="_blank"> Github Profile</a>
                <h2>{`${this.state.followers.length === 0 ? '' : 'Followers'}`}</h2>
                <ul>
                    {this.state.followers.map(
                        follower => <li><a href={follower.html_url} target="_blank"> {follower.login} </a> </li>
                    )}
                </ul>
            </div>
        )
    }
}

const Container = styled.div`
background-color:#494449;
color: #ddeac1;
border-radius:10%;
text-align:center;
margin-left:2rem;
border:2px solid black;
width:25rem;
margin-bottom:2rem;
`

export default UserCard