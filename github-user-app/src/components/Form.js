import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    // state = {
    //     input: ''
    // };

    // handleChange = e => {
    //     this.setState({
    //       ...this.state,
    //       input: e.target.value
    //     });
    // };

    // handleSubmit = e => {
    //     e.preventDefault();
    //     axios.get(`https://api.github.com/users/${this.state.input}`)
    //         .then(resp => {
    //         console.log('handleSubmit response', resp);
    //         this.setState({
    //             ...this.state,
    //             avatar_url: resp.data.avatar_url,
    //             bio: resp.data.bio,
    //             login: resp.data.login,
    //             followers_url: resp.data.followers_url,
    //             following_url: resp.data.following_url,
    //             name: resp.data.name,
    //             isSubmitted: true
    //         })
    //         })
    //         .catch(err => {console.log(err);})
    // };

    render () {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                    type='text'
                    onChange={this.props.handleChange}
                    value={this.props.input}
                    placeholder='Search for a new user'
                    />
                    <button>Find</button>
                </form>
            </div>
        )
    }
}

export default Form