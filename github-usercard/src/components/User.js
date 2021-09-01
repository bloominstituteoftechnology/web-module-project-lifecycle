import React from 'react';
import styled from 'styled-components';


const UserDiv = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 25px;
    filter: drop-shadow(12px 12px 12px black);
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
        width: 50%;
    }
`

const UserInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
`

function User(props) {
    return(
        <UserDiv>
            <img src={props.data.avatar_url} alt='User Avatar'/>
            <UserInnerDiv>
                <h1>User Name: {props.data.login}</h1>
                <p>Followers: {props.data.followers}</p>
            </UserInnerDiv>
        </UserDiv>
    );
}

export default User;
