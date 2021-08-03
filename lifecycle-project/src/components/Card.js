import React from "react";
import axios from "axios";
import Followers from "./Followers";

class Card extends React.Component {
    state = {
        followers: [],
      }

      componentDidMount() {
        axios.get("https://api.github.com/users/klove-a/followers")
          .then(res => res.data)
          .then(res => {
            this.setState({
              ...this.state,
              followers:res
            });
        })
        .catch(err => {
          console.log(err);
        })
      }

    render() {
        console.log(this.followers)
        return(
            <div>
                <h2>Name: {this.props.userCard.login}</h2>
                <h5>Location: {this.props.userCard.location}</h5>
                <p>Bio: {this.props.userCard.bio}</p>
                <div className="followerDiv">
                    <h3>Followers</h3>
                    {this.state.followers.map(follower => (
                        <Followers key={follower.id} followers={follower}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Card;