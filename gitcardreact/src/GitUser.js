import React from "react";
import axios from "axios";


// /
class GitUser extends React.Component
{

    //Setting state to info array
    state =
    {
        gitterInfo: []
    }

    
    componentDidMount()
    {
        //Axios gets from the API
        axios
        
        .get("https://api.github.com/users/tfbielawski")
        
        //Then sets the state with data
        .then(res =>
        {
            this.setState
            ({
                ...this.state,
                gitterInfo:res.data
            })
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
            <div className = "gitClass">
                <div className = "gitClass">
                    <h2> GitHub username: {this.state.gitterInfo.login} </h2>
                </div>

                <div className = "gitClass">
                    <h2> GitHub username: {this.state.gitterInfo.id} </h2>
                    <p>Git USERS </p>
                </div>
            </div>
        )

    }

}

export default GitUser;