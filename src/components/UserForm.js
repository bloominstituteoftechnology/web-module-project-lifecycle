import React from 'react';

class UserForm extends React.Component {
state = {
    user:"",
}

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.fetchUser(this.state.user)
    // }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
            <div>

                <input type="text" placeholder="GitHub User Name" />
                <button >Find User</button>
            </div>
            </form>
        );
    }
}

export default UserForm;
