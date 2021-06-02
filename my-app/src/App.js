import axios from 'axios';
import React from 'react';

//  [ ] Fetch data from the Github API for a Github user
//  [ ] Display the user data on the DOM
//  [ ] Use class components when you need to hold any state or use any lifecycle methods



// // #### Display the User Data

// - Pass the data to the component that will be displaying it
// - Build out a user card using the data that the Github API returns to you
//   - You may reference your old project for this, or you may wish to build this from scratch yourself

// #### Fetch the User's Followers

// - When your component mounts, you will also fetch the user's followers using this endpoint:
//   https://api.github.com/users/< Your github name >/followers
// - Set that data to state as well, and display the data in your app

// #### Style the User Card

// - Now it's time to style up your app
// - You are free to choose how you style your app, but make it look as presentable as you can
// - Try something new here. Maybe that's a new CSS technique you haven't really practiced yet. Maybe it's using a styling library you haven't tried. Push yourself to get better in this area.



class App extends React.Component {
 constructor(){ 
  super()
  this.state = {
      users: [],
      item: []
      
 
    };
  }
  


 componentDidMount(){
axios.get("https://api.github.com/users/abemm7787")

.then(res => {
  console.log(res.data)
  this.setState({users: [res.data]})

})
.catch() 
}








render() {
  return (
    <div className="App">
      <h1>World</h1>
     {this.state.users.map((user) =>( 
       <div> {user.bio} </div>
     )
     
     
     )}

    </div>
  );
}
}

export default App;
