import React from 'react'


class Friend extends React.Component {

    render(){
        const {friend} = this.props;
        console.log(friend, 'friend')

        return(
            <div key={friend.id} className='friend'>
                <img src={friend.avatar_url} width='150' />
                <h5>User: {friend?.login}</h5>
                <p></p>

            </div>
        )
    }
}

export default Friend