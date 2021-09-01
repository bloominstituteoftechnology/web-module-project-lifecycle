
import React, { Component } from 'react';
import '../App.css';

export default function Info(props){

    return(<div className='container'>
        <img src={props.avatar} alt='' />
        <div className='info-container'>
            <h1>{props.name}</h1>
            <p><span>Location</span> |  {props.location}</p>
            <p><span>Socials</span> |  @{props.twitter}</p>
            <p><a href={props.url}>My Github </a></p>
        </div>
        


    </div>);
}