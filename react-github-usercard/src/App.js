import axios from 'axios';
import './App.css';

axios.get('https://api.github.com/users/wzd200')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Github Usercard Application</h1>
    </div>
  );
}

export default App;
