import React from 'react';

class UserForm extends React.Component {
    render(){
        return(
            <form>
                <div>
                <input type='text' name='search' onChange={this.props.handleChange} value={this.props.value} />
                </div>
                <div>
                <button>Search Users</button>
                </div>
            </form>
        )
    }
}
export default UserForm