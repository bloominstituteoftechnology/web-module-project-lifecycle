import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component
{
    state = {
        followers: '',
        name: ''
    };


    componentDidMount(handleInput)
    {
        axios.get(`https://api.github.com/users/${this.state.name}`)

            .then(resp =>
            {
                console.log('Component mounting:', resp);
                this.setState({
                    ...this.state,
                    followers: resp.data.followers_url
                });
            });
    }

    handleInput = (e) =>
    {
        this.setState({
            ...this.state,
            name: e.target.value
        });
    };

    // handleSearch = (e) =>
    // {
    //     e.preventDefault();

    //     axios.get(`https://https://api.github.com/users/${this.state.name}/followers`)
    //         .then(resp =>
    //         {
    //             this.setState({
    //                 ...this.state,
    //                 followers: resp.data.followers_url
    //             });
    //         });
    // };
    render()
    {
        return (
            <div className="App">
                <header className='App-header'>
                    <h1 className='App-logo'>{this.name}</h1>
                </header>
                <nav className="nav-button">
                    <input value={this.state.name} onChange={this.handleInput} />
                    <button className='nav-button' onClick={this.handleInput}>Find Git Hub User</button>
                </nav>

            </div>
        );
    }
}

export default App;
