import React from 'react';

class Usercard extends React.Component {
    componentDidMount() {
        console.log('Usercard successfully mounted!')
    }

    render() {
        return (
            <div>
                <h3>Example Usercard!</h3>
            </div>
        )
    }
}

export default Usercard;