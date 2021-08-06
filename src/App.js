import "./App.css";
import axios from "axios";
import User from "./Components/User";
import Followers from "./Components/Followers";

function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <User />
      <Followers />
    </div>
  );
}

export default App;
