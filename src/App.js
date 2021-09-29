import React from "react";
import axios from 'axios';

import Users from "./components/Users";

class App extends React.Component 
{
    state =
        {
            usersArray: ["anastasia-lapteva", "vasilii-garanin", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"],
            user: ""
        };

    componentDidMount()
    {
        // usersArray.foreach(username =>
        // {
        axios.get(`https://api.github.com/users/anastasia-lapteva`)
            .then(resp =>
            {
                this.setState({
                    ...this.state,
                    user: resp.data.login
                });
            });
        // }
    };

    render()
    {
        console.log("App: Renders DOM");
        return (
            <div className="App">
                {this.state.usersArray.length === 0 ? <div>Loading</div> : <Users user={this.state.user} />}
            </div>
        );
    }
}

export default App;