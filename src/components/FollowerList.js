import React, { useEffect } from 'react'
import axios from 'axios'
import Follower from './Follower'

class FollowerList extends React.Component{

    /* state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/peterdavidconley/followers')
            .then(resp=> {
                this.setState({
                    ...this.state,
                    followers: resp.data
                });
            })
            .catch(err=> {
                console.log(err);
            });
        } */

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