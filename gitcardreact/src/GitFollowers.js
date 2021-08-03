/**
 * Tom Bielawski
 * Lambda School WEB45 3.1.2 
 * REACT GIT CARD PROJECT
 * 8/3/2021
 **/

//Import statements
import React from "react";
import axios from "axios";


//Class definition
class GitFollowers extends React.Component
{

    //Setting state to info array
    state =
    {
        gitterFollowers: []
    }

    //Mount the component
    componentDidMount()
    {
        //Axios gets from the API
        axios
        .get("https://api.github.com/users/tfbielawski/followers")
        
        //Then sets the state with data
        .then(res =>
        {
            //Set the state
            this.setState
            ({
                // ...this.state,
                gitterFollowers: res.data
                
            })
            //
            console.log("FOLLOWERS>>>", res.data);
        })

        //Log any errors
        .catch((err) =>
        {
            console.log(err);
        })
    }

    //Render/return
    render()
    {
        //Return function
        return(
           
            <div className = "myCard">
                <div className = "card" >My followers are:</div>
                {this.state.gitterFollowers.map(follower => {
                return (
                    <div className = "card">
                        <img className = "image" src={follower.avatar_url} alt = "alt"/>
                        <div>{follower.login}</div>
                        <div>{follower.id}</div>
                    </div>
                )})}
            </div>
        )

    }

}

//Export statement
export default GitFollowers;