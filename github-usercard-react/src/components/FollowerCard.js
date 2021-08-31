import React from 'react'
 import FollowersInfo from './FollowersInfo'
 import axios from 'axios'

 class FollowerCard extends React.Component {
     constructor() {
         super();
         this.state = {
           followerData: [],
         }
       }



     componentDidMount() {
         axios.get("https://api.github.com/users/WrongAlice/followers")
           .then(res => this.setState({
             ...this.state,
             followerData: res.data
           }))
           .catch(err => console.log(err))
       }

     render(){
         return(
             <div>
                 {
                     this.state.followerData.map(data => {
                         return <FollowersInfo key={data.id} follower={data}/>
                     })
                 }
             </div>
         )
     }
 }
 export default FollowerCard;