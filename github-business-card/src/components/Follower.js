
import React, { Component } from 'react';
import '../App.css';

export default function Follower(props){

    return(<div className='follower-container'>
        <img src={props.follower.avatar_url} alt='' />
        <p>{props.follower.login}</p>
    </div>);
}