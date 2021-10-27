import React from 'react';

class Followers extends React.Component{
render(){
    return(
        <div className='bot' >
            {this.props.userFollower.map(item => {
                return(
                <div className={`followerDiv ${item.id}`}key={item.id} >
                    <img className='followerImg' src={item.avatar_url} alt='this is the friends img'></img>
                        <h2 className='followerLogin' >{item.login}</h2>
                </div>
                )
            })}
        </div>
    )
}
}
export default Followers