
import React, { Component } from 'react';
import axios from 'axios'
import Follower from './Follower';
import '../App.css';

class Followers extends Component{

    state={
        followers:[]
    }
    
    
    componentDidMount(){
        axios.get('https://api.github.com/users/retrofitt/followers')
            .then(res=>{
                this.setState({
                    followers: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })

    }   

    render(){
        return(<div className='container'>
            {this.state.followers.map(follower=>{
               return <Follower key={follower.id} follower={follower} />
            })}
        </div>);
    };
};

export default Followers