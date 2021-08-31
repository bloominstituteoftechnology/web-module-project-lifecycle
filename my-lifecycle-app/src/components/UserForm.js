import React from 'react';

class UserForm extends React.Component {
    state = {
        user: "",
        input: ""
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value,
        });
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }


    render() {
        return (
            <div className='user'>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="GitHub User Name" onChange={this.handleChanges} value={this.state.input}/>
                    <button >Find User</button>
                </div>
            </form>
            </div>
        );
    }
}

export default UserForm;
