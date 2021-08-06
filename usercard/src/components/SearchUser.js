import React from 'react'

class SearchUser extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
    }

    handleChanges = (e) => {
        // console.log(e.target.value)
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log('submitting')
        this.props.getUser(this.state.searchTerm)
        this.setState({
            ...this.state,
            searchTerm: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>User Search!</h3>
                    <input type="text" placeholder='Enter Github Handle' onChange={this.handleChanges} value={this.state.searchTerm} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchUser