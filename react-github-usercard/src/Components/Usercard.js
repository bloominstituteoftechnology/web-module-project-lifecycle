import React from 'react';

class Usercard extends React.Component {
    componentDidMount() {
        console.log('Usercard successfully mounted!')
    }

    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <div>
                <h3>Example Usercard!</h3>
                <h3>{users.data.login}</h3>
            </div>
        )
    }
}

export default Usercard;