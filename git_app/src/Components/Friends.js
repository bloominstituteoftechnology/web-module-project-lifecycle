import React from 'react'
import Friend from './Friend'


function Friends (props) {

console.log(props.friendsData, 'friends')
    return(
        <div className='friendsContainer'>
            {
              props.friendsData.map(friend => (<Friend friend={friend} />))
            }
        </div>
    )
}

export default Friends