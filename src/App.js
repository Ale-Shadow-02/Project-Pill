import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Registration from "./components/regisration/registration";
import Home from "./components/home/home";
import Account from "./components/account/account";

class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <Route path="/registration" exact component={Registration} />
        <Route path="/" exact component={Home} />
        <Route path="/account" exact component={Account} />
      </div>
    );
  }
}

export default App;
