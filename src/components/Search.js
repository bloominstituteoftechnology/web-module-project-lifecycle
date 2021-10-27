import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
          input:""
        }
      }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
          });
    }

    handleSumbit = (e) => {
        e.preventDefault()
        this.props.updateUserInfoApi(this.state.input)
    }
    render() {
        return(
            <form onSubmit={this.handleSumbit}>
                <input
                    type="text"
                    placeholder="github handle"
                    name="s"
                    onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        )
    }

}

export default SearchBar;