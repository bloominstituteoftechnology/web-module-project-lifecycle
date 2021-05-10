import React from 'react' 
import { Button, Form, Input } from 'reactstrap'
import axios from 'axios' 
import UserCard from './Components/UserCard'
import FollowerCard from './Components/FollowCard' 
import './App.css';

const user=[]
const followers=[]

class App extends React.Component {
  constructor(){
    super()
    this.state={
      username:'eleonard214',
      user: [],
      follwers: []
    };
  }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      ...this.state,
      username: e.target.value,
    })
  }

  componentDidMount(){
    console.log('Component did mount')

    axios 
      .get('https://api.github.com/users/eleonard214')
      .then((res)=>{
        console.log('Result:', res.data)
        this.setState({
          ...this.state,
          user: res.data
        })
        console.log('User:', user, followers)
        this.getFollowers()
      })
      .catch((err)=>console.log('Error', err))
    }

    componentDidUpdate(PrevState){
      console.log('Copmponent did update')
      if (PrevState !== this.state.user){
        console.log('User has changed')
      }
    }

    getUser=()=>{
      axios
        .get('https://api.github.com/users/${this.state.username}')
        .then((res)=>{
          this.setState({
            ...this.state,
            user: res.data
          })
          this.getFollowers()
        })
        .catch((err)=>console.log('Error:', err))
        }

    getFollowers=()=>{
      axios
        .get('https://api.github.com/users/${this.state.username}/followers')
        .then((res)=>{
          console.log('followers:', res.data)
          this.setState({
            ...this.state,
            username:'',
            followers: res.data
          })
        })
        .catch((err)=>{
          console.log('Error:', err)
        })
    }

    render() {
      return(
        <div className='app'>
          <div className='header'>
            <h1>Github User</h1>
            <Form>
              <Input
                type="text"
                className='user-search'
                onChange={this.handleChange}
                value={this.state.username}
                placeholder="Github Username"
              />
              <Button classname='formButton' color='info' onClick={this.getUser}>
                Find User 
              </Button>
            </Form>
          </div>
          <div className='Main'>
            <UserCard user={this.state.user}/>
          </div>
          <div>
            <FollowerCard followers={this.state.followers}/>
          </div>
        </div>
      );
    }
}
  

 export default App;
