import React, { Component } from "react";
import Title from "../blockTextTitle/blockTextTitle";
import { Link } from "react-router-dom";
import home_logo from "../../images/home/home_logo.svg";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home__body">
        <div className="block__text">
          <div className="home__logo">
            <img src={home_logo} className="home__logo--img" alt={home_logo} />
          </div>
          <Title />
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
            <div className="header__logo"></div>
          </div>
          <div className="input__list">
            <ul className="list">
              <li className="list__item">
                <input
                  className="list__item--title"
                  type="text"
                  name="name"
                  value=""
                  placeholder="Название лекарства"
                />
                <div>
                  <div className="list__item--radio-box">
                    {"До еды"}
                    <input
                      className="list__item--radio"
                      type="radio"
                      name="radio"
                      value=""
                    />
                  </div>
                  <div className="list__item--radio-box">
                    {"После еды"}
                    <input
                      className="list__item--radio"
                      type="radio"
                      name="radio"
                      value=""
                    />
                  </div>
                </div>
                <div className="list__item--checkbox-box">
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
                    />
                    {"Утро"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
                    />
                    {"День"}
                  </label>
                  <label>
                    <input
                      className="list__item--checkbox"
                      type="checkbox"
                      name="check"
                      value=""
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
