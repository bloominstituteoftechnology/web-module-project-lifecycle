import React from 'react'

function Follower(props){

    const { photourl, username } = props

        return(
            <div className='follower'>
                <img height='150px' width='150px' src={photourl}/>
                <h5>{username}</h5>
            </div>
        )
}

export default Follower