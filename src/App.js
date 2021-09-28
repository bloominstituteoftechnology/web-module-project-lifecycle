import React from "react";
import axios from 'axios';

class App extends React.Component 
{
    state =
        {
            users: [],
            user: ""
        };

    componentDidMount()
    {
        axios.get("https://api.github.com/users/anastasia-lapteva")
            .then(resp =>
            {
                this.setState({
                    ...this.state,
                    users: resp.data.login
                });
            });
    };

    handleInput = (e) =>
    {
        this.setState({
            ...this.state,
            user: e.target.name
        });
    };

    render()
    {
        return (
            <div>
                <header>
                    <h1>React Github User Card</h1>
                </header>
                <form>
                    <h2>TEST</h2>
                </form>
            </div>
        );
    }
}

export default App;