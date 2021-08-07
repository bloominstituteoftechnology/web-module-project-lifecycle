import React from 'react';
import UserCard from './Usercard.js';
import axios from 'axios';
import styled from 'styled-components';
import { Router, Route } from 'react-router-dom';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 10%;
    align-items: center;

`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;

`;

const Button = styled.button`
    width: 40%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 8px;
    font-weight: bold;
    background-color: white;
    padding: 1.5%;
`;

const Label = styled.label`
    color: black;
    font-weight: bold;
    border: 1px solid white;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 2%;
    padding: 1.5%;

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

      componentDidUpdate(prevProps, prevState) {
          if (prevState.name !== this.state.name) {
            console.log("new user appeared!" + ` ${this.state.login}`)
            window.history.pushState('', '', `/${this.state.login}`);
          }
      }


    render(){
        return (
            
            <div>
            <FormContainer>
                    <FormWrapper onSubmit={this.submitHandler}>
                    <Label>Enter Github Username!</Label>
                    <input type="text" name="newuser" id="newuser" value={this.state.newUser} onChange={this.changeHandler}/>
                    <Button>Enter</Button>
                    </FormWrapper>
            </FormContainer>
            <div>
                {this.state.name == '' ? '' : <UserCard newUser={this.state.newUser} name={this.state.name} login={this.state.login} id={this.state.id} url={this.state.url} avatar={this.state.avatar} followers={this.state.followers} followerCount={this.state.followerCount} />}
            </div>
            </div>
        )
    }
}

export default NewUser;