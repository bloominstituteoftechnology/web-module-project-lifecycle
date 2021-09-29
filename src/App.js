import React from "react";
import axios from 'axios';

import Users from "./components/Users";

class App extends React.Component 
{
    state =
        {
            usersArray: [],
            user: ""
        };

    componentDidMount()
    {
        axios.get("https://api.github.com/users/anastasia-lapteva")
            .then(resp =>
            {
                this.setState({
                    ...this.state,
                    user: resp.data
                });
            });
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