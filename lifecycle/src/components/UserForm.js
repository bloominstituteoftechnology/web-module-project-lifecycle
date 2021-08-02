import React from 'react';

class UserForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div>
                    <input type='text' name='search' onChange={this.props.onChange} value={this.props.value} />
                </div>
                <div>
                    <button >Search Users</button>
                </div>
            </form>
        )
    }
}
export default UserForm