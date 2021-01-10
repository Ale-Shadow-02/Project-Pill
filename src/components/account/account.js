import React, { Component } from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import account_logo from "../../images/my_account/account_logo.svg";
import "./account.scss";

export default class Account extends Component {
  state = {
    sqlList: [],
    title: "",
  };

  componentDidMount() {
    fetch("http://localhost:8000/list")
      .then((res) => res.json())
      .then((data) => {
        data.map((el) => {
          return this.setState({
            sqlList: [...this.state.sqlList, ...el.newList],
            title: el.title,
          });
        });
      });
  }

  deleteList = () => {
    fetch("http://localhost:5000/list/41", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  render() {
    return (
      <div className="account__body">
        <div className="block__text">
          <div className="account__logo">
            <img
              src={account_logo}
              className="account__logo--img"
              alt={account_logo}
            />
          </div>
          <Slogan />
          <div className="home__list">
            <span className="home__list--title">{this.state.title}</span>
            <Link to="/account-list" className="home__list--link">
              Перейти
            </Link>
          </div>
        </div>
        <div className="block__list">
          <div className="block__list--header">
            <div className="block__list--title header">
              <h2 className="header__title">{this.state.title}</h2>
            </div>
            <div className="account__header--logo"></div>
          </div>
          <div className="input__list">
            <ul className="list">
              {this.state.sqlList.map((el) => {
                return (
                  <li className="list__item">
                    <div className="list__item--title">
                      <p>{el.valueTitle}</p>
                    </div>
                    <div>
                      <div className="list__item--radio-box">
                        {"До еды"}
                        <p className="account__input--radio-box">
                          {el.selectedRadio === "beforeMeals" ? "V" : null}
                        </p>
                      </div>
                      <div className="list__item--radio-box">
                        {"После еды"}
                        <p className="account__input--radio-box">
                          {el.selectedRadio === "afterMeals" ? "V" : null}
                        </p>
                      </div>
                    </div>
                    <div className="list__item--checkbox-box">
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.morning ? "V" : null}
                        </p>
                        {"Утро"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.day ? "V" : null}
                        </p>
                        {"День"}
                      </div>
                      <div className="list__item--checkbox">
                        <p className="account__item--checkbox-box">
                          {el.evening ? "V" : null}
                        </p>
                        {"Вечер"}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="input__list--btn">
              <Link
                to="/"
                className="input__list--button account__list--button"
              >
                Добавить список
              </Link>
              <button
                className="input__list--button account__list--btn"
                onClick={() => this.deleteList()}
              >
                Удалить список
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
