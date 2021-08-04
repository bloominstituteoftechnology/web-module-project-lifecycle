import React from 'react'
import Axios from 'axios'


class Follower extends React.Component {
    state = {
        followerstuff: this.props.follower.login,
        personsInfo: []
    }
    componentDidMount() {
        Axios.get(`https://api.github.com/users/${this.state.followerstuff}`)
            .then(res => {
                this.setState({
                    personsInfo: res.data
                })
            })
            .catch(err => console.log('can find followers urls', err))
    }

    render() {
        const { follower } = this.props
        return (
            <div key={follower.id} className='flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                        <img alt={follower.login} src={follower.avatar_url} width='80%' height='80%' />
                    </div>
                    <div className='flip-card-back'>
                        <h2><a href={follower.html_url}>{this.state.personsInfo.name}'s GitHub</a></h2>
                        <p>Username: {this.state.personsInfo.login}</p>
                        {this.state.personsInfo.location !== null ? <p>Location: {this.state.personsInfo.location}</p> :
                            <></>}
                        {this.state.personsInfo.bio !== null ? <p>About: {this.state.personsInfo.bio}</p> :
                            <></>}
                        <p>Repos: {this.state.personsInfo.public_repos}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Follower
