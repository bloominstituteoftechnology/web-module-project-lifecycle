import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';


export default class App extends Component {
  state = {
    avatar_url: '',
    name: '',
    login: '',
    location: '',
    html_url: '',
    followers: '',
    following: '',
    bio: ''

  }

  componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.login}`)
            .then(resp=> {
              console.log("resp____", resp);
                this.setState({
                  ...this.state,
                  avatar_url: '',
                  name: resp.data.name,
                  login: resp.data.login,
                  location: resp.data.location,
                  html_url: resp.data.html_url,
                  followers: resp.data.followers,
                  following: resp.data.following,
                  bio: resp.data.bio  
                });
            })
            .catch(err=> {
                console.log(err);
            })
  
        // axios.get(`https://api.github.com/users/${this.state.login}/following`)
        //     .then(resp=> {
        //         this.setState({
        //           ...this.state,
        //           following: [...this.state.following, {avatar_url: resp.data.avatar_url,
        //           login: resp.data.login}],
        //         });
        //     })
        //     .catch(err=> {
        //         console.log(err);
        //     })
  }

  componentDidUpdate(prevProps, prevState) {
        console.log("-------------");
        console.log("App: Update State");
        console.log(`old props: `, prevProps);
        console.log(`new props: `, this.props);

        console.log(`old state: `, prevState);
        console.log(`new state: `, this.state);


        if (this.state.login !== prevState.login) {
            console.log("Change in login");
             axios.get(`https://api.github.com/users/${this.state.login}`)
            .then(resp=> {
              console.log("resp____", resp);
                this.setState({
                  ...this.state,
                  avatar_url: resp.data.avatar_url,
                  name: resp.data.name,
                  login: resp.data.login,
                  location: resp.data.location,
                  html_url: resp.data.html_url,
                  followers: resp.data.followers,
                  following: resp.data.following,
                  bio: resp.data.bio  
                });
            })
            .catch(err=> {
                console.log(err);
            })

            // axios.get(`https://api.github.com/users/${this.state.login}/following`)
            // .then(resp=> {
            //   console.log("resp____", resp);
            //     this.setState({
            //       ...this.state,
            //       following: [...this.state.following, {avatar_url: resp.data.avatar_url,
            //       login: resp.data.login}],
            //     });
            // })
            // .catch(err=> {
            //     console.log(err);
            // })
        }
    }

  handleSubmit = (e)=> {
    e.preventDefault();
    this.setState({
      ...this.state,
      login: this.state.searchInput,
      following: [],
      searchInput:"",
    });
    console.log("handlesubmit________",this.state);
  };
  

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      searchInput: value,
    });
    console.log("------this.state",this.state);
    console.log("value----",value);
  };

  // handleChange = (e) => {
  //       let value = e.target.value;
  //       this.setState({
  //           ...this.state,
  //           value: e.target.value
  //       })
  //   }



  render() {
    return (
      <div className="container">
      <div className="header">
        <img src={lambdalogo} alt="Lambda Logo"/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo" />
      </div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="input" onChange={this.handleChange}/>
        <button className= "inputBtn">Type User's Github Username</button>
      </form>

      <div className="cards">
        <div className="card">
          <img src={this.state.avatar_url} alt="usergitcard"/>
          <div>
            <h3 className="name">{this.state.name}</h3>
            <p className="username">{this.state.login}</p>
            <p>Location: {this.state.location}</p>
            <p>
              "Profile: "
              <a href={this.state.html_url}>http://github.com/{this.state.login}</a>
            </p>
            <p>Followers: {this.state.followers} </p>
            <p>Following: {this.state.following}</p>
            <p>Bio: {this.state.bio}</p>
          </div>
        </div>
        
        <button className="btn" onClick={this.handleChange} >Is Following:</button>
        

        <div className="card">
          <img src="https://avatars.githubusercontent.com/u/77358128?v=4" alt="usergitcard"/>
          <div>
            <h3 className="name">Priscila Monteiro</h3>
            <p className="username">PriscilaMonteiro</p>
            <p>Location: null</p>
            <p>
              "Profile: "
              <a href="http://github.com/PriscilaMonteiro">http://github.com/PriscilaMonteiro</a>
            </p>
            <p>Followers:</p>
            <p>Following:</p>
            <p>Bio: </p>
          </div>
        </div>



        <div className="card">
          <img src={this.state.avatar_url} alt="usergitcard"/>
          <div>
            <h3 className="name">{this.state.name}</h3>
            <p className="username">{this.state.login}</p>
            <p>Location: {this.state.location}</p>
            <p>
              "Profile: "
              <a href={this.state.html_url}>http://github.com/{this.state.login}</a>
            </p>
            <p>Followers: {this.state.followers} </p>
            <p>Following: {this.state.following}</p>
            <p>Bio: {this.state.bio}</p>
          </div>
        </div>


        





        
      </div>
    </div>
    )
  }
}



// const data = axios.get('https://api.github.com/users/Priscilamonteiro')
//   .then(res =>{
//     cards.append(cardMaker(res))
//   })
//   .catch(err =>{
//     console.log('error')
//   })

//   const cards = document.querySelector('.cards');

//   const createFollowingCards = user => {
// 	return axios
// 		.get(`https://api.github.com/users/${user}/following`)
// 		.then(res => {
// 			console.log(res.data);
// 			return res.data;
// 		})

//     .then(followingArray => {
// 			followingArray.forEach(following => {
// 				return axios
// 					.get(`https://api.github.com/users/${following.login}`)
// 					.then(res => {
// 						const cards = document.querySelector(".cards");
// 						cards.appendChild(cardMaker(res));
// 					})
// 					.catch(err => console.log(err));
// 			});
// 		})
// 		.catch(err => console.log(err));
// };
// createFollowingCards("Priscilamonteiro")
  



// function cardMaker({data}){
//   const card = document.createElement('div')
//   const image = document.createElement('img')
//   const cardInfo = document.createElement('div')
//   const gitName = document.createElement('h3')
//   const userName = document.createElement('p')
//   const userLocation = document.createElement('p')
//   const profile = document.createElement('p')
//   const profileURL = document.createElement('a')
//   const userFollowers = document.createElement('p')
//   const userFollowing = document.createElement('p')
//   const userBio = document.createElement('p')

//   card.classList.add('card')
//   gitName.classList.add('name')
//   userName.classList.add('username')
  

//   card.appendChild(image)
//   card.appendChild(cardInfo)
//   cardInfo.appendChild(gitName)
//   cardInfo.appendChild(userName)
//   cardInfo.appendChild(userLocation)
  
//   cardInfo.appendChild(profile)
//   cardInfo.appendChild(userFollowers)
//   cardInfo.appendChild(userFollowing)
//   cardInfo.appendChild(userBio)

//   image.src = `${data.avatar_url}`
//   gitName.textContent = `${data.name}`
//   userName.textContent = `${data.login}`
//   userLocation.textContent = `Location: ${data.location}`
//   profile.textContent += `Profile: `
//   profileURL.setAttribute('href', `${data.html_url}`)
//   profileURL.textContent = `${data.html_url}`
//   profile.appendChild(profileURL)
//   userFollowers.textContent = `Followers: ${data.followers}`
//   userFollowing.textContent = `Following: ${data.following}`
//   userBio.textContent = `Bio: ${data.bio}`

//   return card
// }

