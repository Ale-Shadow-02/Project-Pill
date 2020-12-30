import React from "react";
import "./App.scss";
import Registration from "./components/regisration/registration";
import Home from "./components/home/home";
import Account from "./components/account/account";

class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <Registration />
      </div>
    );
  }
}

export default App;
