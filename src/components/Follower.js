import React from 'react';

class Followers extends React.Component{
render(){
    return(
        <div>
            {this.props.userFollower.map(item => {
                return(
                <div>
                    <img src={item.avatar_url} alt='this is the friends img'></img>
                        <h2>{item.login}</h2>
                </div>
                )
            })}
        </div>
    )
}
}
export default Followers