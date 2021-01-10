import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Registration from "./components/regisration/registration";
// import HomeTest from "./components/home_test/home_test";
import Account from "./components/account/account";
// import Home from "./components/home/home";
import Home2 from "./components/home/home2";

class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <Route path="/registration" exact component={Registration} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={Home2} />
        <Route path="/account/:id" exact component={Account} />
        {/* <Route path="/test" exact component={HomeTest} /> */}
      </div>
    );
  }
}

export default App;
