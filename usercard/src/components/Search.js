import React, { Component } from 'react'
import axios from 'axios';
// search func is not working yet
// class Search extends Component {
//   state = {
//     searchUser: null
//   }

//   componentDidMount(){
//     axios
//       .get(`https://api.github.com/users/${this.state.login}`)
//       .then((res) => {
//         this.setState({
//           searchUser: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   componentDidUpdate(prevProps, prevState) {
//       if (this.state.login !== prevState.login) {
//           console.log("Change in login");
//             axios
//             .get(`https://api.github.com/users/${this.state.login}`)
//             .then((res) => {
//               this.setState({ 
//                 searchUser: res.data,
//               });
//             })
//            .catch((err) => console.log(err));
//       }
      
//   }

//   handleSubmit = (e)=> {
//     e.preventDefault();
//     this.setState({
//       ...this.state,
//       login: this.state.searchInput,
//       following: [],
//       searchInput:"",
//     });
//     console.log("handlesubmit________",this.state);
//   };
  

//   handleChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       ...this.state,
//       searchInput: value,
//     });
//     console.log("------this.state",this.state);
//     console.log("value----",value);
//   };


//   render() {
//      const { searchUser } = this.state;
    
//     if(!this.state.searchUser) return <p>Type a Github login</p>
//     return (
      
//       <div className="card">
//           <img src={searchUser.avatar_url} alt="usergitcard"/>
//           <div>
//             <h3 className="name">{searchUser.name}</h3>
//             <p className="username">{searchUser.login}</p>
//             <p>Location: {searchUser.location}</p>
//             <p>
//               "Profile: "
//               <a href={searchUser.html_url}>http://github.com/{searchUser.login}</a>
//             </p>
//             <p>Followers: {searchUser.followers} </p>
//             <p>Following: {searchUser.following}</p>
//             <p>Bio: {searchUser.bio}</p>
//           </div>
//         </div>
//     )
//   }
// }

// export default Search;


// {/* <div className="cards">
//         <div className="card">
//           <img src={this.state.avatar_url} alt="usergitcard"/>
//           <div>
//             <h3 className="name">{this.state.name}</h3>
//             <p className="username">{this.state.login}</p>
//             <p>Location: {this.state.location}</p>
//             <p>
//               "Profile: "
//               <a href={this.state.html_url}>http://github.com/{this.state.login}</a>
//             </p>
//             <p>Followers: {this.state.followers} </p>
//             <p>Following: {this.state.following}</p>
//             <p>Bio: {this.state.bio}</p>
//           </div>
//         </div> */}

{/* <form onSubmit={this.handleSubmit}>
      <input type="text" className="input" onChange={this.handleChange}/>
      <button className= "inputBtn">Try another Github Username</button>
    </form> */}
