import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Registration from "./components/regisration/registration";
// import HomeTest from "./components/home_test/home_test";
import Account from "./components/account/account";
// import Home from "./components/home/home";
import Home2 from "./components/home/home2";

let count = 1;

class App extends React.Component {
  state = {
    listTitle: "",
    itemTitle: "",
    selectedRadio: "",
    morning: false,
    day: false,
    evening: false,
    // textLink: "",
    // disabled: true,
    list: [],
    appData: [],
  };

  updateInput = (key, value) => {
    this.setState({ [key]: value, disabled: false });
  };

  addItem = () => {
    let itemTitle = {
      id: count /* 1 + Math.random() */,
      valueTitle: this.state.itemTitle.slice(),
      selectedRadio: this.state.selectedRadio,
      morning: this.state.morning,
      day: this.state.day,
      evening: this.state.evening,
    };
    count += 1;
    const list = [...this.state.list];
    list.push(itemTitle);
    this.setState({ list, itemTitle: "" });
  };

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedlist = list.filter((elem) => elem.id !== id);
    this.setState({ list: updatedlist });
  };

  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  hendleRadioChecked = (event) => {
    this.setState({ selectedRadio: event.target.value });
  };

  hendleChecked = (event) => {
    let inputName = event.target.name;
    let isActive = event.target.checked;
    this.setState({ [inputName]: isActive });
  };

  saveList = () => {
    fetch("http://localhost:8000/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.listTitle,
        newList: this.state.list,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // data.map((el) => {
        //   return this.setState({ textLink: el.id });
        // });
        this.setState({ appData: [...data] });
        console.log(this.state.appData);
      });
    const clearList = [];
    this.setState({ list: clearList, listTitle: "" });
  };

  // componentDidMount() {
  //   fetch("http://localhost:8000/list")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ appData: [...data] });
  //     });
  // }
  function() {
    fetch("http://localhost:8000/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ appData: [...data] });
      });
  }

  render() {
    return (
      <div className="app__container">
        <Route path="/registration" exact component={Registration} />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/" exact component={Home2} /> */}
        <Route path="/" exact>
          <Home2
            {...this.state}
            saveList={this.saveList}
            updateInput={this.updateInput}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            handleChange={this.handleChange}
            hendleRadioChecked={this.hendleRadioChecked}
            hendleChecked={this.hendleChecked}
          />
        </Route>
        <Route path="/account/:id" exact component={Account} />
        {/* <Route path="/account/:id" exact>
          <Account />
        </Route> */}
        {/* <Route path="/test" exact component={HomeTest} /> */}
      </div>
    );
  }
}

export default App;
