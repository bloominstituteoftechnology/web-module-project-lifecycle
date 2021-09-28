import React from 'react';
import axios from 'axios';



class App extends React.Component{
  render(){
    const followers = [
      "https://avatars.githubusercontent.com/u/1483837?v=4",
      "https://avatars.githubusercontent.com/u/16849092?v=4",
      "https://avatars.githubusercontent.com/u/39303588?v=4",
      "https://avatars.githubusercontent.com/u/71340015?v=4",
      "https://avatars.githubusercontent.com/u/75883540?v=4",
      "https://avatars.githubusercontent.com/u/84058769?v=4",
      "https://avatars.githubusercontent.com/u/86445750?v=4",
      "https://avatars.githubusercontent.com/u/87157585?v=4",
      "https://avatars.githubusercontent.com/u/87495756?v=4",
      "https://avatars.githubusercontent.com/u/87831982?v=4",
    ]
      
    return(
      <div>
        <h1>Welcome to my Github</h1>
        <div className="my-github">
          <img src="https://avatars.githubusercontent.com/u/87757115?v=4" />
          <p>Username: minasoha</p>
          <p>Follower Count: 10</p>
        </div>
        <div>
          {
            followers.map(followers => {
              return(<img key={followers} width="200" src={followers} />)
            })

          }
        </div>
      </div>
    )
  }



}

export default App;