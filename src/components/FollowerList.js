import React from "react"
import axios from 'axios'
import Follower from './Follower'



class FollowerList extends React.Component {

    state = {
        followers: []        
      }


    componentDidMount() {
        axios.get('https://api.github.com/users/beatlesm/followers')
            .then(res=> {
            //   debugger
              this.setState({
                ...this.state,
                followers: res.data
              });  
            })
            .catch(err=> {
                console.log(err);
            });
      }

    render () {
        return (
            <div className ="follower">
                {this.state.followers.map(follower => {
                    return <Follower follower={follower} key={follower.id}  />
                })}
            </div>

        );
    }
}

export default FollowerList;