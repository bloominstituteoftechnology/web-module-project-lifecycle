import React from 'react';
import axios from 'axios';
import User from './components/User';
import Followers from './components/Followers';

function App() {
  return (
    <div>
      <h1>Sebastian's Github User Card</h1>
       <User />
       <Followers />
  </div>
  )
}
     
export default App;