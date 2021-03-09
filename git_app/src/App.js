import React from 'react'
import Form from './Components/Form'
import Friends from './Components/Friends'
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
    friendsData: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/l-steinmacher/followers')
    .then(res => {
      this.setState({friendsData: res.data})
    })
    .catch(err => {
      debugger
      alert(err, 'Error')
    })
  }

  handleChange = (e) => {
    
  }

  // handleSubmit = (e) => {
  //   preventDefault()

  // }


  render() {
    console.log(this.state.friendsData, 'friends')
    return(
      <div>
        <h1>My Git-hub followers!</h1>
        <div className='formContainer'>
          <Form />
        </div>
        <div className='friendContainer'>
          <Friends friendsData={this.state.friendsData} />
        </div>
      </div>
    )
  }
}

export default App;
