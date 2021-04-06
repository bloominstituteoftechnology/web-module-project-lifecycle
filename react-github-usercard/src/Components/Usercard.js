import React from 'react';

class Usercard extends React.Component {
    componentDidMount() {
        console.log('Usercard successfully mounted!')
    }

    render() {
        const { users } = this.props;
        
        return (
            <div>
                <div>
                    <img src={`${users.data.avatar_url}`}/>
                </div>
                <div>
                    <h3>{users.data.login}</h3>
                    <p>{users.data.url}</p>
                    <p>{`Followers: ${users.data.followers}`}</p>
                    <p>{`Following: ${users.data.following}`}</p>
                </div>
                
            </div>
        )
    }
}

export default Usercard;