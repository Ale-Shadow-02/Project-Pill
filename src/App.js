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
        {/* <Route path="/registration" exact component={Registration} />
        <Route path="/account-list/:id" exact component={Account} />
        <Route path="/" exact component={Home} /> */}
        {/* <Registration /> */}
        <Home />
        {/* <Account /> */}
      </div>
    );
  }
}

export default App;
