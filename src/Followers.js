import React from 'react'
import FollowersCard from './FollowersCard'

class Followers extends React.Component{
    render(){
        return (
            <>
            <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                }}
            >
                {this.props.followersData.map(item => {
                    return <FollowersCard data={item}/>
                })}
            </div>
            </>
        )
    }
}

export default Followers