import React, { Component } from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import home_logo from "../../images/home/home_logo.svg";
import "./home_test.scss";

export default class HomeTest extends Component {
  state = {
    title: "",
    namePill: "",
    morning: false,
    day: false,
    evening: false,
    selectedRadio: "",
  };

  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });
  };

  hendleChecked = (event) => {
    let inputName = event.target.name;
    let isActive = event.target.checked;
    this.setState({ [inputName]: isActive });
  };

  hendleRadioChecked = (event) => {
    this.setState({ selectedRadio: event.target.value });
  };

  render() {
    return (
      <div className="home__body">
        <div className="block__text">
          <div className="home__logo">
            <img src={home_logo} className="home__logo--img" alt={home_logo} />
          </div>
          <Slogan />
          <div className="home__list">
            <span className="home__list--title">{this.state.title}</span>
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
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                className="header__input"
                placeholder="название списка"
              />
            </div>
            <div className="header__logo"></div>
          </div>
          <div className="input__list">
            <ul className="list">
              <li className="list__item">
                <input
                  className="list__item--title"
                  type="text"
                  name="namePill"
                  value={this.state.namePill}
                  onChange={this.handleChange}
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
                      onChange={this.hendleRadioChecked}
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
                      onChange={this.hendleRadioChecked}
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
                      onChange={this.hendleChecked}
                    />
                    {"Утро"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="day"
                      checked={this.state.day}
                      onChange={this.hendleChecked}
                    />
                    {"День"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="evening"
                      checked={this.state.evening}
                      onChange={this.hendleChecked}
                    />
                    {"Вечер"}
                  </label>
                </div>
                <button className="list__item--btn">X</button>
              </li>
            </ul>
            <div className="input__list--btn">
              <button className="input__list--button">
                Добавить лекарство
              </button>
              <button className="input__list--button">Сохранить список</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
