import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <section>
        <h1>GITHUB INFO</h1>
        <button>Github Handle</button>
        <button>Search</button>
      </section>
      <br/>
      <section>
        <img height='250px' width='250px' src='https://avatars.githubusercontent.com/u/85258866?v=4'/>
        <div>
          <h3>PETER CONLEY</h3>
          <p>(peterdavidconley)</p>
          <h4>TOTAL REPOS: </h4>
          <h4>TOTAL FOLLOWERS:</h4>
        </div>
      </section>
      <section>
        <h2>FOLLOWERS:</h2>
        <br />
        <img height='150px' width='150px' src='https://avatars.githubusercontent.com/u/18486822?v=4'/>
        <h5>nullflux</h5>
      </section>
    </div>);
  }
}

export default App;
