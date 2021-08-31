import React from 'react';

import './App.css';

class App extends React.Component {

  state = {
      myCard: 'https://api.github.com/users/ayv8er',
      followersCards: [
    'https://api.github.com/users/tetondan',
    'https://api.github.com/users/dustinmyers',
    'https://api.github.com/users/justsml',
    'https://api.github.com/users/luishrd',
    'https://api.github.com/users/bigknell',
    'https://api.github.com/users/LeonelHays',
    'https://api.github.com/users/onuri5',
    'https://api.github.com/users/TraNequaFauntleroy',
    'https://api.github.com/users/christina-yun',
    'https://api.github.com/users/krisf451',
    'https://api.github.com/users/Raj-04',
    'https://api.github.com/users/patricelachelle',
    'https://api.github.com/users/Pluviio',
    'https://api.github.com/users/vannguyen141290',
    'https://api.github.com/users/vibhasjain',
    'https://api.github.com/users/jeffyjkang',
    'https://api.github.com/users/cyberkade',
    'https://api.github.com/users/justinfineberg',
    'https://api.github.com/users/SomeiLam'
    ]
  }


  render() {
    return (
      <>
      <header><h1>Richard's Github Information</h1></header>
        <div className='myCard'>
          <div className='myPic'>
            <img src="https://avatars.githubusercontent.com/u/84942969?v=4" />
          </div>
        </div>
      </>
    )
  }
}

export default App;