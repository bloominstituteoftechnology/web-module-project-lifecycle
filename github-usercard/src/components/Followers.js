import React from 'react';
import styled from 'styled-components';

const FollowerDiv = styled.div`
    max-width: 48%;
    margin: 1%;
    border: 3px solid red;
    border-radius: 50px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
        width: 50%;
    }
`

function Followers(props) {
    return(
        <FollowerDiv>
            <img src={props.data.avatar_url}  alt='User Avatar'/>
            <p>{props.data.login}</p>
        </FollowerDiv>
    );
}

export default Followers;

