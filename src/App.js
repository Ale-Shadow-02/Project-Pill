import React from "react";
import { Route } from "react-router-dom";
import Registration from "./components/regisration/registration";
import Account from "./components/account/account";
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
    this.setState({
      list,
      itemTitle: "",
      selectedRadio: "",
      morning: "",
      evening: "",
      day: "",
    });
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
        this.setState({ appData: [...data] });
        console.log(this.state.appData);
      });
    const clearList = [];
    this.setState({ list: clearList, listTitle: "" });
  };

  componentDidMount() {
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
        <Route
          render={(props) => <Account data={this.state.appData} {...props} />}
          exact
          path="/account/:id"
        />
      </div>
    );
  }
}

export default App;
