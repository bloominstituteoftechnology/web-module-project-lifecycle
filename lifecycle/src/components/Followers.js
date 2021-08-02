import React from 'react';
import FollowersCard from './FollowersCard'
class Followers extends React.Component {

    render(){
        return(
            <div className='followers'>
                {
                    // this.props.followers.map(follower =>{
                    //     return(
                    //         <FollowersCard key={follower.id} follower={follower}/>
                    //     )
                    // })
                }
            </div>
        )
    }
}

export default Followers