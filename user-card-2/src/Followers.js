import React from 'react'
import FollowersInfo from './FollowersInfo'

class Followers extends React.Component {
    render(){
        return(
            <div>
                {
                    this.props.followers.map(data => {
                        return <FollowersInfo key={data.id} follower={data}/>
                    })
                }
            </div>
        )
    }
}
export default Followers