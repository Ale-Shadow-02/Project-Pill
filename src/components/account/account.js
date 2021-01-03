import React, { Component } from "react";
import Slogan from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import account_logo from "../../images/my_account/account_logo.svg";
import "./account.scss";

export default class Account extends Component {
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
            <span className="home__list--title">Лекарства для Мамы</span>
            <Link to="/account-list" className="home__list--link">
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
                className="header__input"
                placeholder="название списка"
              />
            </div>
            <div className="account__header--logo"></div>
          </div>
          <div className="input__list">
            <ul className="list">
              <li className="list__item">
                {/* <input
                  className="list__item--title"
                  type="text"
                  name="name"
                  value=""
                  placeholder="Название лекарства"
                /> */}
                <div className="list__item--title">
                  <p>Название Дедушка</p>
                </div>
                <div>
                  <div className="list__item--radio-box">
                    {"До еды"}
                    {/* <input
                      className="list__item--radio"
                      type="radio"
                      name="radio"
                      value=""
                    /> */}
                    <p className="account__input--radio-box">V</p>
                  </div>
                  <div className="list__item--radio-box">
                    {"После еды"}
                    {/* <input
                      className="list__item--radio"
                      type="radio"
                      name="radio"
                      value=""
                    /> */}
                    <p className="account__input--radio-box">V</p>
                  </div>
                </div>
                <div className="list__item--checkbox-box">
                  {/* <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
                    />
                    {"Утро"}
                  </label> */}
                  <div className="list__item--checkbox">
                    <p className="account__item--checkbox-box">V</p>
                    {"Утро"}
                  </div>
                  {/* <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
                    />
                    {"День"}
                  </label> */}
                  <div className="list__item--checkbox">
                    <p className="account__item--checkbox-box">V</p>
                    {"День"}
                  </div>
                  {/* <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
                    />
                    {"Вечер"}
                  </label> */}
                  <div className="list__item--checkbox">
                    <p className="account__item--checkbox-box">V</p>
                    {"Вечер"}
                  </div>
                </div>
                <button className="list__item--btn">X</button>
              </li>
            </ul>
            <div className="input__list--btn">
              <button className="input__list--button">Добавить список</button>
              <button className="input__list--button account__list--btn">
                Удалить список
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
