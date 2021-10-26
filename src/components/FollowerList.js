import React, { useEffect } from 'react'
import axios from 'axios'
import Follower from './Follower'

class FollowerList extends React.Component{

        render(){
            return(
                <section>
        { this.props.followers.map( (follower) => {return (
        <Follower photourl={follower.avatar_url} username={follower.login}/>
        )}
        )}
      </section>
            )
        }

}

export default FollowerList