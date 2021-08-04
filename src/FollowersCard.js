import React from 'react'

class FollowersCard extends React.Component{
    render(){
        return(
            <>
            <div
                className='followersCard'
                style={{
                    border:'solid 1px black',
                    width:'300px',
                    height:'100px'
                }}
            >
                <h2>{this.props.data.username}</h2>
                <p>Name: {this.props.data.name}</p>
            </div>
            </>
        )
    }
}

export default FollowersCard