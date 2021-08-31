import React from 'react'
import axios from 'axios'

class Form extends React.Component {

    submitHandler = e => {
        e.preventDefault();
        this.props.searchUser(this.props.user)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        onChange={this.props.handleChange}
                        value={this.props.user}
                        id='username'
                        name='user'
                        placeholder='Search for a new user'
                    />
                    <button>Find</button>
                    <p>Pick a new user to continue</p>
                </form>
            </div>
        )
    }
}

export default Form