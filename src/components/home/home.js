import React from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import home_logo from "../../images/home/home_logo.svg";
import "./home.scss";

let count = 1;

class Home extends React.Component {
  state = {
    listTitle: "Чей список?",
    itemTitle: "",
    selectedRadio: "",
    morning: false,
    day: false,
    evening: false,
    list: [],
  };

  updateInput = (key, value) => {
    this.setState({ [key]: value });
  };

  addItem = () => {
    let itemTitle = {
      id: count /* 1 + Math.random() */,
      valueTitle: this.state.itemTitle.slice(),
      selectedRadio: this.state.selectedRadio,
      morning: this.state.morning,
      day: this.state.day,
      evening: this.state.evening,
      listTitle: this.state.listTitle,
    };
    count += 1;
    const list = [...this.state.list];
    list.push(itemTitle);
    this.setState({ list, itemTitle: "", selectedRadio: "" });
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
    fetch("http://localhost:5000/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.list),
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    // });
  };

  saveListTitle = () => {
    fetch("http://localhost:5000/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        listTitle: this.state.listTitle,
      }),
    });
  };

  render() {
    console.log(this.state.list);
    console.log(this.state.listTitle);
    return (
      <div className="home__body">
        <div className="block__text">
          <div className="home__logo">
            <img src={home_logo} className="home__logo--img" alt={home_logo} />
          </div>
          <Slogan />
          <div className="home__list">
            <span className="home__list--title">{this.state.listTitle}</span>
            <Link to="/account" className="home__list--link">
              Перейти
            </Link>
          </div>
        </div>
        <div className="block__list">
          <div className="block__list--header">
            <div className="block__list--title header">
              <h2 className="header__title">Список лекарств</h2>
              <input
                type="text"
                name="listTitle"
                value={this.state.listTitle}
                onChange={this.handleChange}
                className="header__input"
                placeholder="название списка"
              />
            </div>
            <div className="header__logo"></div>
          </div>
          <div className="input__list">
            <ul className="list">
              {this.state.list.map((item) => {
                return (
                  <li className="list__item" key={item.id}>
                    <div className="list__item--title">
                      <p>{item.valueTitle}</p>
                    </div>
                    <div>
                      <div className="list__item--radio-box">
                        {"До еды"}
                        <p className="account__input--radio-box">
                          {this.state.selectedRadio === "beforeMeals"
                            ? "V"
                            : null}
                        </p>
                      </div>
                      <div className="list__item--radio-box">
                        {"После еды"}
                        <p className="account__input--radio-box">
                          {this.state.selectedRadio === "afterMeals"
                            ? "V"
                            : null}
                        </p>
                      </div>
                    </div>
                    <div className="list__item--checkbox-box">
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {this.state.morning ? "V" : null}
                        </p>
                        {"Утро"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {this.state.day ? "V" : null}
                        </p>
                        {"День"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {this.state.evening ? "V" : null}
                        </p>
                        {"Вечер"}
                      </div>
                    </div>
                    <button
                      className="list__item--btn"
                      onClick={() => this.deleteItem(item.id)}
                      title="Удалить препарат"
                    >
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="list">
              <div className="list__item">
                <input
                  className="list__item--title"
                  type="text"
                  value={this.state.itemTitle}
                  onChange={(e) =>
                    this.updateInput("itemTitle", e.target.value)
                  }
                  placeholder="Название лекарства"
                />
                <div>
                  <div className="list__item--radio-box">
                    {"До еды"}
                    <input
                      className="list__item--radio"
                      type="radio"
                      name="beforeMeals"
                      value="beforeMeals"
                      checked={this.state.selectedRadio === "beforeMeals"}
                      onChange={() => this.hendleRadioChecked()}
                    />
                  </div>
                  <div className="list__item--radio-box">
                    {"После еды"}
                    <input
                      className="list__item--radio"
                      type="radio"
                      name="afterMeals"
                      value="afterMeals"
                      checked={this.state.selectedRadio === "afterMeals"}
                      onChange={() => this.hendleRadioChecked()}
                    />
                  </div>
                </div>
                <div className="list__item--checkbox-box">
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="morning"
                      checked={this.state.morning}
                      onChange={() => this.hendleChecked()}
                    />
                    {"Утро"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="day"
                      checked={this.state.day}
                      onChange={() => this.hendleChecked()}
                    />
                    {"День"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="evening"
                      checked={this.state.evening}
                      onChange={() => this.hendleChecked()}
                    />
                    {"Вечер"}
                  </label>
                </div>
              </div>
            </div>
            <div className="input__list--btn">
              <button
                className="input__list--button"
                onClick={() => this.addItem()}
                disabled={!this.state.itemTitle.length}
              >
                Добавить лекарство
              </button>
              <button
                className="input__list--button"
                onClick={() => this.saveList()}
              >
                Сохранить список
              </button>
              <button
                className="input__list--button"
                onClick={() => this.saveListTitle()}
              >
                Сохранить ЗАГАЛОВОК
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
