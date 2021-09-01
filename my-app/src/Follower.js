import React from 'react';

class Follower extends React.Component {


    render() {
        // console.log(this.props.follower)
        return (
            <>
            <div key={this.props.follower.id} className='follower'>
                <img src={this.props.follower.avatar_url} alt={this.props.follower.login} />
            </div>

            <h3>{this.props.follower.login}</h3>
            </>
        )
    }
}

export default Follower;