import React from 'react';
import UserCard from './Usercard.js';
import axios from 'axios';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

class NewUser extends React.Component {
    constructor(){
        super();

        this.state = {
            newUser: '',
            name: '',
            login: '',
            id: null,
            url: '',
            avatar: '',
            followers: '',
            followerCount: null
        }
    }

    submitHandler = e => {
        e.preventDefault();

        axios.get(`https://api.github.com/users/${this.state.newUser}`)
            .then(res => this.setState({
                ...this.state,
                name: res.data.name,
                login: res.data.login,
                id: res.data.id,
                url: res.data.html_url,
                avatar: res.data.avatar_url,
                followers: res.data.followers_url,
                followerCount: res.data.followers
              }))
              .catch(err => console.log(err))
        
      }
    
      changeHandler = e => {
        this.setState({
          ...this.state,
          newUser: e.target.value
        });
      }



    render(){
        return (
            <FormWrapper>
                <form onSubmit={this.submitHandler}>
                <label /> Enter A Github User!
                <input type="text" name="newuser" id="newuser" value={this.state.newUser} onChange={this.changeHandler}/>
                <button>Enter</button>
                <UserCard newUser={this.state.newUser} name={this.state.name} login={this.state.login} id={this.state.id} url={this.state.url} avatar={this.state.avatar} followers={this.state.followers} followerCount={this.state.followerCount} />
                </form>
            </FormWrapper>
        )
    }
}

export default NewUser;