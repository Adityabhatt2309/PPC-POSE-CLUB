import "./App.css";
import Web3 from "web3";

import Home from "./Home/Home";

function App() {
  //eslint-disable-next-line
  const web3Instance = new Web3("http://localhost:8545");

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
