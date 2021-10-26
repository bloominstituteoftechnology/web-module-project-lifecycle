import React from "react"
import Follower from "./Follower";
import axios from "axios";

class FollowerList extends React.Component {
    state = {
        followers:[]
    }
 componentDidMount(){
     axios.get(`https://api.github.com/users/${this.props.userName}/followers`) 
     .then(resp =>{
        // console.log(resp)
        this.setState({
            ...this.state,
            followers:resp.data
        })
     })
     .catch(err =>{
         console.log(err)
     })
 }
    render(){
        return (
        <div> 
            <h2>Followers:</h2>
            {this.state.followers.map(follower =>{
                return (<Follower key={follower.id} follower={follower} />)
    })}
            
            </div>
        )
    }
}
export default FollowerList