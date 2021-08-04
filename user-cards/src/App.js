import React from 'react';
import Cards from './Cards';
import axios from 'axios';
import './styles.scss';

class App extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log("App: Component Mounts");

    setTimeout(() => {
      axios.get('https://api.github.com/users', {
        params: {
          _limit: 10
        }
      })
        .then((res) => {
          this.setState({
            ...this.state,
            persons: res.data
          })
          console.log(this.state)
        }
        )
    }, 1000)
  }

  render() {
    console.log("App: Renders Component");
    return (
      <div className="App">
        {
          (this.state.persons.length > 0) ? <Cards persons={this.state.persons} /> : <div>Loading</div>
        }
      </div>
    );
  }
}

export default App;

