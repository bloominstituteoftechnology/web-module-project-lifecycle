import React from 'react';
import FollowersCard from './FollowersCard'
class Followers extends React.Component {

    render() {
        console.log(this.props.followers);
        return (
            <div className='followers'>
                {
                    this.props.followers.map(data => {

                        return (
                            <FollowersCard key={data.id} follower={data} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Followers