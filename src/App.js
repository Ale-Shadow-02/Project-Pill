import React from "react";
import "./App.css";
import Registration from "./components/regisration/registration";
import Home from "./components/home/home";
import Account from "./components/account/account";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Account />
        <Registration />
        <Home />
      </div>
    );
  }
}

export default App;
